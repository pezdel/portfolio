<script lang="ts">
	import Icon from '$lib/components/utils/Icon.svelte';
	import { github, linkedin } from '$lib/utils/svgs';
</script>

<div class="footer">
	<div class="links">
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
	<p>© Adam Chilicki 2024. All rights reserved.</p>
</div>

<style lang="scss">
	.footer {
		background-color: var(--clr-secondary);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
	}
	.links {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	p {
		font-size: var(--fs-reg);
		font-weight: var(--fw-reg);
		color: #667;
	}
</style>
