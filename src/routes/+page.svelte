<script lang="ts">
	import { handleWheel, hide } from '$lib/events/handleWheel'
	import { Navbar, Home, Skills, Projects, Contact, Footer } from '$lib';

	//todo:
	//section icons
	//nav border?
	//skills: textbox?, better filtering? 
	//prject: cards, everything.
	//animations.
	//contact - js
	//social links working.
	//lorum text replaced


	//done:
	//socials - home, footer
	//background/gradient - home/contact
	//footer styling
	//contact: form 

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
	.hideHeader{
		top: -70px;
		transition: 0.5s;
	}
</style>