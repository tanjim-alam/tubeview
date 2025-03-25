import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // Get the URL parameter from the query string
    const { searchParams } = new URL(request.url);
    const instagramUrl = searchParams.get('url');

    // Validate the Instagram URL
    if (!instagramUrl) {
        return NextResponse.json({ error: 'Instagram URL is required.' }, { status: 400 });
    }

    const options = {
        method: 'GET',
        url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/stories',
        params: {
            username_or_id_or_url: instagramUrl
        },
        headers: {
            'x-rapidapi-key': '5dc41c2c7fmshb39d362b7141157p14695bjsnb268e88d4b9e',
            'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        // Assuming the response data contains an array of items with video_versions
        const items = response.data?.data?.items || [];

        // Attempt to extract and filter video_versions
        const filterData = items
            .map(item => item.video_versions) // Extract video_versions from each item
            .flat() // Flatten the array in case of nested arrays
            .filter(video => video.type === 103); // Filter for type 103

        // Return the filtered video versions as JSON
        return NextResponse.json({ success: true, stories: filterData }, { status: 200 });
    } catch (error) {
        // console.error('Error fetching Instagram story:', error.message);
        return NextResponse.json(
            { error: error.message },
            { status: error.response?.status || 500 }
        );
    }
}
