import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function generateTitles(keywords, tone, description) {
    const prompt = `
    Generate 5 catchy YouTube video titles based on the following:
    Keywords: ${keywords}
    Tone: ${tone}
    Detailed Description: ${description}
  `;

    const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
    });

    return completion.choices[0].message.content.trim().split('\n').filter(Boolean);
}

export async function POST(req) {
    try {
        const { keywords, tone, description } = await req.json();

        let titles;
        try {
            titles = await generateTitles(keywords, tone, description);
        } catch (error) {
            if (error.response && error.response.status === 429) {
                return NextResponse.json(
                    {
                        error: 'Rate limit exceeded. Please try again later.',
                    },
                    { status: 429 }
                );
            }
            throw error;
        }

        return NextResponse.json({ success: true, titles }, { status: 200 });
    } catch (error) {
        console.error(error.message);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
