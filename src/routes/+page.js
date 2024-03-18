import { PUBLIC_TMDB_ACCESSTOKEN } from '$env/static/public';

const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${PUBLIC_TMDB_ACCESSTOKEN}`
	}
};

//SSR api request
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(url, options);
	const data = await res.json();

	if (res.ok) {
		return {
			popular: data.results
		};
	}
}
