<script lang="ts">
    import ContactImg from '$lib/assets/contact.svg'
    import Form from './ContactForm.svelte'
    import { contactIcon } from '$lib/utils/svgs';
    import Icon from '$lib/components/sections/utils/Icon.svelte'
</script>

<section class="contact wrapper" id="contact">
    <div class="contact__title">
        <!-- <Icon class="icon" viewbox={contactIcon.viewbox} d={contactIcon.d} /> -->
        <h2>Contact</h2>
        <p>Lorem ipsum dolor sit, amet consectetur</p>
    </div>
    <div class="contact__content">
        <Form />
        <img src={ContactImg} alt="" />
    </div>
</section>

<style lang="scss">
    .contact{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 78vh;
        width: 100%;
        margin-bottom: 0;
        // background: linear-gradient(
        //     173deg,
        //     var(--clr-primary) 50%,
        //     var(--clr-secondary) 50.5%
        // );
    }
    .contact__title{
        display: flex;
        flex-direction: column;
        gap: .25rem;
        padding-bottom: 3rem;
        align-items: center;
    }
    
    
    .contact__content{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        

        & img{
            max-width: 400px;
            max-height: 400px;
        }
    }
</style>
