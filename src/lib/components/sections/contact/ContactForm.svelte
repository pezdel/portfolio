<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	let contactSent = false;
	let contactError = false;

	const accessKey = '770ea8cf-7961-40fc-8855-be992e34271c';
	async function handleSubmit(event: Event) {
		event.preventDefault();
		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify({ name: name, email: email, message: message, accessKey: accessKey }),
				headers: { 'Content-Type': 'application/json' }
			});
			const json = await res.json();
			console.log(json);

			name = '';
			email = '';
			message = '';
			contactSent = true;
		} catch (e) {
			console.log('An error occurred', e);
			contactError = true;
		}
	}
	const clear = () => {
		contactSent = false;
		contactError = false;
	};
</script>

<form on:submit={handleSubmit}>
	{#if contactSent}
		<div class="sent">
			{#if !contactError}
				<button class="btn green" on:click={clear}>Sent Thank you!</button>
			{:else}
				<button class="btn red" on:click={clear}>Error: try again.</button>
			{/if}
		</div>
	{:else}
		<input type="hidden" name="accessKey" value={accessKey} />
		<label for="name">Name:<span>*</span></label>
		<input type="text" id="name" bind:value={name} required />

		<label for="email">Email:<span>*</span></label>
		<input type="email" id="email" bind:value={email} required />

		<label for="message">Message:</label>
		<textarea rows="6" id="message" bind:value={message} required></textarea>

		<button class="btn" type="submit">Submit</button>
	{/if}
</form>

<style lang="scss">
	.green {
		background-color: green;
		min-width: 50%;
	}
	.red {
		background-color: red;
		min-width: 50%;
	}
	.sent {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	span {
		color: var(--clr-accent);
	}
	form {
		display: flex;
		flex-direction: column;
		min-width: 450px;
		gap: 0.5rem;
		padding: 1rem;
		border-radius: 1rem;

		box-shadow: 0 -1px 1px 0 var(--clr-text);
		background-color: var(--clr-secondary);
	}
	input,
	textarea {
		padding: 1rem;
		min-width: 350px;
		border-radius: 0.5rem;
		background-color: var(--clr-text);
		border: 0;
	}
	button {
		margin-top: 1em;
	}

	@media (width < 576px) {
		// @media(width < 768px){
		form {
			min-width: 300px;
			padding: 0.5rem;
		}
		input,
		textarea {
			min-width: 250px;
			padding: 0.5rem;
		}
	}
</style>

