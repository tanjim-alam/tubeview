import { NextResponse } from 'next/server';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const url = searchParams.get('url');
    const apiKey = process.env.YOUTUBE_API_KEY || "AIzaSyC_zT-cq_JPimX6kpEibmrsqlYbGxNJsbU";

    let channelId = null;

    try {
        if (url.includes('/@')) {
            const username = url.split('/@')[1].split('/')[0];
            const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${apiKey}`);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                channelId = data.items[0].id;
            } else {
                // Fallback to search by custom URL
                const searchResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${username}&key=${apiKey}`);
                const searchData = await searchResponse.json();
                if (searchData.items && searchData.items.length > 0) {
                    channelId = searchData.items[0].snippet.channelId;
                }
            }
        } else if (url.includes('/c/') || url.includes('/user/')) {
            const customUrl = url.split('/c/')[1]?.split('/')[0] || url.split('/user/')[1].split('/')[0];
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${customUrl}&key=${apiKey}`);
            const data = await response.json();
            if (data.items && data.items.length > 0) {
                channelId = data.items[0].snippet.channelId;
            }
        }
    } catch (error) {
        console.error("Error fetching channel ID:", error);
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch channel ID',
        }, { status: 500 });
    }

    if (channelId) {
        return NextResponse.json({
            success: true,
            channelId,
        }, { status: 200 });
    } else {
        return NextResponse.json({
            success: false,
            error: 'Channel not found',
        }, { status: 404 });
    }
}
