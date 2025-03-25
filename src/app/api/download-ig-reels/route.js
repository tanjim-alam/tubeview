import axios from 'axios';
import { NextResponse } from 'next/server';

const RAPIDAPI_URL = 'https://instagram-post-reels-stories-downloader-api.p.rapidapi.com/instagram/';
const RAPIDAPI_KEY = 'ce28482c5emsh20727b0ed1bdb4ap15680bjsn3eae581f1e97';
const RAPIDAPI_HOST = 'instagram-post-reels-stories-downloader-api.p.rapidapi.com';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const reelUrl = searchParams.get('url');

  if (!reelUrl) {
    return NextResponse.json({ error: 'Reel URL is required' }, { status: 400 });
  }

  const options = {
    method: 'GET',
    url: RAPIDAPI_URL,
    params: { url: reelUrl },
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
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
