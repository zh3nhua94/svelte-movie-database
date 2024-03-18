<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	let inputValue = '';
	let active = false;

	function submitSearch() {
		goto(`/search/${inputValue}`);
	}
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	<input
		on:focus={() => (active = true)}
		on:blur={() => (active = false)}
		bind:value={inputValue}
		type="text"
		name="search_movie"
		placeholder="Search Movie"
		class={active ? 'selected' : ''}
	/>
	{#if inputValue}
		<button in:fly={{ y: 0, duration: 500 }} out:fly={{ y: 0, duration: 500 }}>Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem auto;
	}
	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background-color: rgba(96, 110, 201);
		color: white;
		border: none;
		font-weight: bold;
		position: absolute;
		right: 0;
		bottom: 50%;
		transform: translate(0, 50%);
		cursor: pointer;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		height: 100%;
	}
	input {
		width: 100%;
		border: none;
		border-radius: 10px;
		padding: 1rem;
		font-size: 1rem;
		outline: none;
		color: white;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background-color: rgb(63, 63, 63);
	}
	input.selected {
		background-color: rgba(50, 50, 50);
	}
</style>
