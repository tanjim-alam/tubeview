// app/api/getYoutubeVideo/route.js

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // Set up the Axios options
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('url');
    if (!videoUrl) {
        return NextResponse.json({ error: 'Video Link is required' }, { status: 400 });
    }
    const options = {
        method: 'GET',
        url: 'https://youtube-video-and-shorts-downloader1.p.rapidapi.com/api/getYTVideo',
        params: {
            url: videoUrl
        },
        headers: {
            'x-rapidapi-key': '5dc41c2c7fmshb39d362b7141157p14695bjsnb268e88d4b9e',
            'x-rapidapi-host': 'youtube-video-and-shorts-downloader1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
