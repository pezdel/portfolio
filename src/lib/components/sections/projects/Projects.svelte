<script lang="ts">
    import Spuy from '$lib/assets/spuy.png'
    import Pomo from '$lib/assets/pomo-clone.png'
    import { projectsIcon } from '$lib/utils/svgs';
    import Icon from '$lib/components/utils/Icon.svelte';
    import Card from './Card.svelte'

</script>

<section class="projects" id="projects">
    <div class="projects__header">
        <!-- <Icon class="icon" viewbox={projectsIcon.viewbox}  d={projectsIcon.d} height={20} width={20} /> -->
        <h2>Projects</h2>
        <p>What I've built.</p>
    </div>

    <div class="projects__content">
        <Card class="card main-project" name='Spuy.com' />
        <Card class="card" name='AnyGood.com' />
        <Card class="card" name='Pomo-clone.com' />
    </div>
</section>

<style lang="scss">
    .projects{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .projects__header{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-bottom: 2rem;
    }
    .projects__content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media(width < 768px){
        .projects__content{
            gap: 1rem;
            grid-template-columns: repeat(1, 1fr);
        }
        .main-project{
            grid-column: span 1;
        }
    }
</style>