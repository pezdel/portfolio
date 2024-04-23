<script lang="ts">
	import ContactImg from '$lib/assets/contact.svg';
	import Form from './ContactForm.svelte';
</script>

<section class="contact wrapper" id="contact">
	<div class="contact__title">
		<h2>Contact</h2>
		<p>Lorem ipsum dolor sit, amet consectetur</p>
	</div>
	<div class="contact__content">
		<img src={ContactImg} alt="" />
		<Form />
	</div>
</section>

<style lang="scss">
	.contact {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 78vh;
		width: 100%;
		// margin-bottom: 0;
	}

	.contact__title {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding-bottom: 3rem;
		align-items: center;
	}

	.contact__content {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
		gap: 1rem;
		flex-wrap: wrap;

		& img {
			max-width: 400px;
			max-height: 400px;
		}
	}
	@media (width < 768px) {
		.contact__content img {
			max-width: 300px;
			max-height: 300px;
		}
	}
</style>
