// /src/app/api/fetchStats/route.js

import fetch from 'node-fetch';

export async function GET() {
  const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/topstats/0?statsType=mostRuns';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
    },
  };

  // console.log("111");

  try {
    const response = await fetch(url, options);
    // console.log('response:: ', response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), { status: 500 });
  }
}
