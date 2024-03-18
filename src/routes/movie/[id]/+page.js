import { PUBLIC_TMDB_ACCESSTOKEN } from '$env/static/public';

//SSR api request
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const url = 'https://api.themoviedb.org/3/movie/' + params.id + '?language=en-US';
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${PUBLIC_TMDB_ACCESSTOKEN}`
		}
	};
	const res = await fetch(url, options);
	const data = await res.json();
	// const movie = data.results.find((movie) => movie.id === Number(params.id));

	if (res.ok) {
		return {
			details: data
		};
	}
}
