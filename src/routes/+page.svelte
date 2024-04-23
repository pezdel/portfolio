<script lang="ts">
	import { handleWheel, hide } from '$lib/utils/handleWheel';
	import { Navbar, Home, Skills, Projects, Contact, Footer } from '$lib';
</script>

<svelte:window on:wheel={handleWheel} />

<header class:hideHeader={$hide}>
	<Navbar />
</header>
<main class="wrapper">
	<Home />
	<Skills />
	<Projects />
	<Contact />
</main>
<footer>
	<Footer />
</footer>

<style>
	.hideHeader {
		top: -70px;
		transition: 0.5s;
	}
</style>

