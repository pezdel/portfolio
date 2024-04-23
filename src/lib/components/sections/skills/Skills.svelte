<script lang="ts">
	import Filter from './Filter.svelte';
	import { writable } from 'svelte/store';
	import Cards from './Cards.svelte';

	const filterName = writable('all');
</script>

<section class="skills" id="skills">
	<div class="skills__header">
		<div class="left">
			<h2>Skills & Abilities</h2>
			<p>What I use.</p>
		</div>
		<Filter {filterName} />
	</div>

	<Cards {filterName} />
</section>

<style lang="scss">
	h2 {
		padding-bottom: 0.5rem;
	}
	.skills {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.skills__header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 2rem;
		gap: 1rem;
	}
</style>

