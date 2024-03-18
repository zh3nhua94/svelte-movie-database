<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="movie-details">
	<div class="img-container">
		{#if data.details.backdrop_path}
			<img
				src={`https://image.tmdb.org/t/p/original${data.details.backdrop_path}`}
				alt={data.details.title}
			/>
		{/if}
	</div>
	<div class="txt-container">
		<h1>{data.details.title}</h1>
		<p class="overview">{data.details.overview}</p>
		<p>
			<span>Release Date:</span>
			{data.details.release_date} <br />
			<span>Rating:</span>
			{data.details.vote_average} <br />
		</p>
	</div>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}
	p {
		padding: 1rem 0rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		border-radius: 1rem;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	span {
		font-weight: 600;
	}
</style>
