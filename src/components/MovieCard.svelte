<script>
	export let movie;
</script>

{#if movie.poster_path}
	<div class="movie-card">
		<a href={`/movie/${movie.id}`}>
			<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
		</a>
		<div class="description">
			<h2>{movie.name || movie.title}</h2>
			<p>{movie.first_air_date || movie.release_date}</p>
		</div>
	</div>
{/if}

<style>
	img {
		width: 100%;
		height: 30vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
