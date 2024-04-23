<script lang="ts">
	import Pezdel1 from '$lib/assets/pezdel1.png';
	import Pezdel2 from '$lib/assets/pezdel2.png';
	import Pomo from '$lib/assets/pomo-clone.png';
	import Card from './Card.svelte';

	const pezdel = {
		title: 'Pezdel.com',
		text: 'A way to search time series data by image rather than dates.',
		img: Pezdel2,
		github: 'https://github.com/pezdel',
		link: 'https://pezdel.com'
	};
	const anygood = {
		title: 'AnyGood.com',
		text: 'TODO',
		img: Pezdel1,
		github: 'https://github.com/pezdel',
		link: 'https://github.com/pezdel'
	};
	const pomo = {
		title: 'PomoClone',
		text: 'A Pomodoro.io clone made with React.',
		img: Pomo,
		github: 'https://github.com/pezdel/pomo-clone',
		link: 'https://pomo-clone.vercel.app/'
	};
</script>

<section class="projects" id="projects">
	<div class="projects__header">
		<h2>Projects</h2>
		<p>What I've built.</p>
	</div>

	<div class="projects__content">
		<Card
			class="card main-project"
			title={pezdel.title}
			text={pezdel.text}
			img={pezdel.img}
			github={pezdel.github}
			link={pezdel.link}
		/>
		<Card
			class="card"
			title={anygood.title}
			text={anygood.text}
			img={anygood.img}
			github={anygood.github}
			link={anygood.link}
		/>
		<Card
			class="card"
			title={pomo.title}
			text={pomo.text}
			img={pomo.img}
			github={pomo.github}
			link={pomo.link}
		/>
	</div>
</section>

<style lang="scss">
	.projects {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.projects__header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding-bottom: 2rem;
	}
	.projects__content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	@media (width < 768px) {
		.projects__content {
			gap: 1rem;
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
