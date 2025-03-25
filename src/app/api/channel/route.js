import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const channelId = searchParams.get('channelId');
    const apiKey = process.env.YOUTUBE_API_KEY || "AIzaSyC_zT-cq_JPimX6kpEibmrsqlYbGxNJsbU";

    const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
        const channel = data.items[0];
        const subscribers = channel.statistics.subscriberCount;
        const views = channel.statistics.viewCount;
        const title = channel.snippet.title;
        const publishedAt = channel.snippet.publishedAt;
        const profileImageUrl = channel.snippet.thumbnails.default.url;
        const country = channel.snippet.country;
        const videoCount = channel.statistics.videoCount;
        const earnings = (views / 1000) * 0.96; // example calculation
        const sponsorship = subscribers * 0.96 * 250000; // example calculation
        return NextResponse.json({
            title,
            subscribers,
            views,
            videoCount,
            publishedAt,
            profileImageUrl,
            country,
            earnings: earnings.toFixed(2),
            sponsorship: sponsorship.toFixed(2)
        }, { status: 200 });
    } else {
        return NextResponse.json({
            error: 'Channel not found'
        }, { status: 404 });
    }
}
