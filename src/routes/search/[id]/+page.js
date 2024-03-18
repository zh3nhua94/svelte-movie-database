import { PUBLIC_TMDB_ACCESSTOKEN } from '$env/static/public';

//SSR api request
/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const url = `https://api.themoviedb.org/3/search/movie?query=${params.id}&language=en-US&page=1`;
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${PUBLIC_TMDB_ACCESSTOKEN}`
		}
	};

	const res = await fetch(url, options);
	const data = await res.json();

	if (res.ok) {
		return {
			searchData: data
		};
	}
}
