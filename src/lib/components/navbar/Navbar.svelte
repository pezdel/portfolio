<script lang="ts">
	let active = true;
	const toggleNav = () => {
		active = !active;
	};
	const closeNav = () => {
		active = false;
	};
</script>

<div class="nav wrapper">
	<svg
		height="50"
		width="50"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 502.664 502.664"
		fill="#000000"
	>
		<path
			d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431z"
			fill="#fff"
		/>
		<path d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z" fill="#fff" />
		<path
			d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183L348.843,358.226z"
			fill="#fff"
		/>
	</svg>
	<nav>
		<button
			on:click={toggleNav}
			class:active
			class="nav__hamburger"
			aria-controls="nav__items"
			aria-expanded="false"
		>
			<span class="sr-only">Menu</span>
			<span class="hamburger"></span>
		</button>
		<ul class="nav__items" class:active id="nav__items">
			<li><a href="#home" class="nav__item" on:click={closeNav}>Home</a></li>
			<li><a href="#skills" class="nav__item" on:click={closeNav}>Skills</a></li>
			<li><a href="#projects" class="nav__item" on:click={closeNav}>Projects</a></li>
			<li><a href="#contact" class="nav__item" on:click={closeNav}>Contact</a></li>
		</ul>
	</nav>
</div>

<style lang="scss">
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		padding: 0 4rem;
		margin-inline: auto;
		background-color: var(--clr-primary);

		&__hamburger {
			display: none;
		}
		&__items {
			display: flex;
			list-style: none;
			gap: 2rem;
		}
		&__item {
			font-size: var(--fs-body);
			font-weight: 600;
		}
	}
	a {
		position: relative;
		text-decoration: none;
		font-size: var(--fs-h3);
		font-weight: var(--fw-bold);
		color: inherit;
	}
	a::after {
		content: '';
		position: absolute;
		background-color: var(--clr-accent);
		height: 3px;
		width: 0;
		left: 50%;
		bottom: -5px;
		transition: 0.3s;
		border-radius: 1rem;
	}

	a:hover::after {
		width: 100%;
		left: 0;
	}

	/* Hamburger */
	.hamburger {
		display: block;
		position: relative;
	}

	.hamburger,
	.hamburger::after,
	.hamburger::before {
		background: var(--clr-text);
		width: 2.5em;
		height: 4px;
		margin-block: 4px;
		border-radius: 1em;
		transition: transform 250ms ease-in-out();
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
	}

	.hamburger::before {
		top: 6px;
	}
	.hamburger::after {
		bottom: 6px;
	}

	@media (width < 35em) {
		.nav {
			padding: 0 2rem;
		}
		.nav__items {
			position: absolute;
			top: 0;
			right: -400px;
			height: 100vh;
			width: 300px;
			gap: 3em;
			flex-direction: column;
			padding: min(30vh, 10rem) 2rem;
			background-color: var(--clr-accent);

			transition: all 350ms ease-out;
		}
		.nav__hamburger {
			display: block;
			position: relative;
			z-index: 9999;
			background: transparent;
			aspect-ratio: 1;
			border: 0;
			cursor: pointer;
		}
		.active {
			right: 0px;
			& .hamburger {
				transform: rotate(0.625turn);
			}
			& .hamburger::before {
				transform: rotate(90deg) translateX(-11px);
			}
			& .hamburger::after {
				opacity: 0;
			}
		}
	}
</style>
