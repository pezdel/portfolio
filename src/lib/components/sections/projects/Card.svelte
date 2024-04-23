<script lang="ts">
	import Github from '$lib/assets/github.svg';
	import Link from '$lib/assets/link.svg';
	export let title: string;
	export let text: string;
	export let img: string;
	export let github: string;
	export let link: string;
</script>

<div class={$$props.class}>
	<img src={img} alt={title} class="card-img" />
	<div class="card-content">
		<h2 class="card-title">{title}</h2>
		<p class="card-text">{text}</p>
		<div class="links">
			<a href={github}><img src={Github} alt="Github" /></a>
			<a href={link}><img src={Link} alt="Link" /></a>
		</div>
	</div>
</div>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		padding: 1rem;
	}
	.card-img {
		width: 100%;
		height: auto;
		display: block;
	}
	.card-content {
		padding: 1rem;
	}
	.card-title {
		font-size: 1.5rem;
		margin-bottom: 10px;
	}
	.card-text {
		font-size: 1rem;
		color: #555;
	}
	img {
		border-radius: 0.5rem;
	}
	.main-project {
		grid-column: span 2;
	}
	@media (width < 768px) {
		.main-project {
			grid-column: span 1;
		}
	}
	.links {
		display: flex;
		padding-top: 0.5rem;
		gap: 1rem;
		align-items: center;
		justify-items: center;
	}
</style>
