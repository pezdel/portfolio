<script lang="ts">
	import Icon from '$lib/components/utils/Icon.svelte';
	import HeroImg from '$lib/assets/hero.png';
	import { github, linkedin } from '$lib/utils/svgs';
</script>

<section class="home" id="home">
	<figure class="home__image">
		<img src={HeroImg} alt="full-stack" />
		<figcaption>Created using Midjourney with search of 'full-stack'</figcaption>
	</figure>
	<div class="home__content">
		<h1>Adam Chilicki</h1>
		<h3 class="accent">Full-Stack Developer</h3>
		<p>'Building bridges between users and data with code' -gbt</p>
		<div class="buttons">
			<a href="#contact" class="btn">Contact</a>
			<Icon
				class="social-icon"
				height={30}
				width={30}
				d={github.d}
				viewbox={github.viewbox}
				link={github.link}
			/>
			<Icon
				class="social-icon"
				height={30}
				width={30}
				d={linkedin.d}
				viewbox={linkedin.viewbox}
				link={linkedin.link}
			/>
		</div>
	</div>
</section>

<style lang="scss">
	.home {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;
		flex-direction: row-reverse;
	}
	.home__image {
		position: relative;
		& img {
			max-width: 100%;
			min-width: 350px;
			max-height: 400px;
			border-radius: 2rem;
			filter: drop-shadow(0px 0px 3rem rgba(255, 255, 255, 0.2));
		}
		& figcaption {
			position: absolute;
			bottom: 40px;
			left: 10px;
			font-style: italic;
			font-size: var(--fs-sm);
			color: #667;
			text-wrap: wrap;
		}
	}
	.home__content {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding: 2rem;
		max-width: 600px;
	}

	.buttons {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-top: 0.5rem;
	}
</style>
