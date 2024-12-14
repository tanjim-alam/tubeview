// app/api/youtube/route.js
import axios from 'axios';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('videoId');
    const apiKey = process.env.YOUTUBE_API_KEY;

    // Example CPM rate (in dollars)
    const averageCPM = 2.0; // Adjust this value as needed

    try {
        const videoResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoId}&key=${apiKey}`
        );

        const videoData = videoResponse.data.items[0];
        const channelId = videoData.snippet.channelId;

        const channelResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`
        );

        const channelData = channelResponse.data.items[0];

        // Calculate Est. Video Value and Estimated CPM
        const viewCount = parseInt(videoData.statistics.viewCount, 10);
        const estimatedCPM = averageCPM;
        const estimatedVideoValue = (viewCount / 1000) * estimatedCPM;

        return new Response(JSON.stringify({
            video: videoData,
            channel: channelData,
            estimatedCPM: estimatedCPM.toFixed(2),
            estimatedVideoValue: estimatedVideoValue.toFixed(2)
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({ error: 'Error fetching data' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
