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
        <div class="box main-project">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
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
    .box {
        background-color: var(--clr-secondary);
        padding: 20px;
        height: 250px;
        text-align: center;
        border-radius: 1rem;
        grid-column: span 1;
    }
    .main-project{
        grid-column: span 2;
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