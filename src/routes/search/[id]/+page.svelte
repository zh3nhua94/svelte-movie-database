<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	export let data;
</script>

<div class="searched-movies">
	{#each data.searchData.results as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-column-gap: 1rem;
		grid-row-gap: 2rem;
	}
</style>
