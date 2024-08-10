// // /pages/api/fetchStats.js
// import fetch from "node-fetch";

// export default async function handler(req, res) {
// 	const url =
// 		"https://cricbuzz-cricket.p.rapidapi.com/stats/v1/topstats/0?statsType=mostRuns";
// 	const options = {
// 		method: "GET",
// 		headers: {
// 			"x-rapidapi-key": process.env.RAPIDAPI_KEY, // Store your API key in .env.local
// 			"x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
// 		},
// 	};

// 	try {
// 		const response = await fetch(url, options);
// 		const data = await response.json(); // Assuming the API returns JSON data
// 		res.status(200).json(data);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: "Failed to fetch data" });
// 	}
// }
