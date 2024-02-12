<script lang="ts">
  let name = '';
  let email = '';
  let message = '';

  function handleSubmit(event: Event) {
    event.preventDefault();

    name = '';
    email = '';
    message = '';
  }
</script>

<form on:submit={handleSubmit}>
    <label for="name">Name:<span>*</span></label>
    <input type="text" id="name" bind:value={name} required />

    <label for="email">Email:<span>*</span></label>
    <input type="email" id="email" bind:value={email} required />

    <label for="message">Message:</label>
    <textarea rows=6 id="message" bind:value={message} required></textarea>

    <button type="submit">Submit</button>
</form>

<style lang="scss">
    span{
        color: var(--clr-accent);
    }
    form{
        display: flex;
        flex-direction: column;
        min-width: 500px;
        gap: .5rem;
        padding: 1rem 3rem;
        border-radius: 1rem;

        box-shadow: 0 -1px 1px 0 var(--clr-text);
        background-color: var(--clr-secondary);

    }
    input, textarea{
        padding: .75rem 2rem;
        min-width: 350px;
        border-radius: .5rem;
        background-color: var(--clr-text);
        border: 0;
    }

    button{
        padding: .5rem;
        max-width: 100px;
        border: 0;
        background-color: var(--clr-accent);
        border-radius: .5rem;
        font-weight: var(--fw-bold);
        font-size: var(--fs-reg);
        margin-top: 1rem;
    }
</style>