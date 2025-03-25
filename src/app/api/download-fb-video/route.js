import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const reelUrl = searchParams.get('url');

    if (!reelUrl) {
        return NextResponse.json({ error: 'Reel URL is required' }, { status: 400 });
    }

    const options = {
        method: 'GET',
        url: 'https://facebook-videos-reels-downloader.p.rapidapi.com/get-video-info',
        params: {
            url: reelUrl
        },
        headers: {
            'x-rapidapi-key': 'ce28482c5emsh20727b0ed1bdb4ap15680bjsn3eae581f1e97',
            'x-rapidapi-host': 'facebook-videos-reels-downloader.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        const data = response.data;
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching Instagram Reel:', error.message);
        return NextResponse.json({ error: 'Failed to fetch reel data', details: error.message }, { status: 500 });
    }
}
