<script lang="ts">
	import Icon from '$lib/components/utils/Icon.svelte';
	import HeroImg from '$lib/assets/hero.png'
	import { github, codepen, linkedin } from '$lib/utils/svgs';
</script>


<section class="home wrapper" id="home">
	<figure class="home__image">
		<img src={HeroImg} alt="full-stack">
		<figcaption>Created using Midjourney with search of 'full-stack'</figcaption>
	</figure>
	<div class="home__content">
		<h1>Adam Chilicki</h1>
		<h3>Full-Stack Developer</h3>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
		<div class="home__buttons">
			<button>Button</button>
			<Icon class="social-icon" height={30} width={30} d={github.d} viewbox={github.viewbox} />
			<Icon class="social-icon" height={30} width={30} d={codepen.d} viewbox={codepen.viewbox} />
			<Icon class="social-icon" height={30} width={30} d={linkedin.d} viewbox={linkedin.viewbox} />
		</div>
	</div>
</section>

<style lang="scss">
	.home{
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	.home__image{
		position: relative;
		& img{
			max-width: 100%;
			min-width: 350px;
			max-height: 400px;
			border-radius: 2rem;
			// background: radial-gradient(circle at 51% 52%, rgba(31, 31, 31, 1) 0%, rgba(7, 7, 9, 1) 69%);
			filter: drop-shadow(0px 0px 3rem rgba(255, 255, 255, 0.2));
		}
		& figcaption{
			position: absolute;
			bottom: 40px;
			left: 10px;
			font-style: italic;
			font-size: 0.9em;
			color: #667;
			margin-top: 8px;
			text-wrap: wrap;
		}
	}

	.home__content{
		display: flex;
		flex-direction: column;
		gap: .5rem;
		padding: 2rem;

		& h3{
			color: var(--clr-accent);
		}

		& button{
			padding: 1rem;
			background-color: var(--clr-accent);
			color: var(--clr-text);
			max-width: 100px;
			border-radius: 1rem;
			border: 0;
		}
	}

	.home__buttons{
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
