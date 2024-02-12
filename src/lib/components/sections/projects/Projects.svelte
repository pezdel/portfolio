<script lang="ts">
    import Spuy from '$lib/assets/spuy.png'
    import Pomo from '$lib/assets/pomo-clone.png'
    import { projectsIcon } from '$lib/utils/svgs';
    import Icon from '$lib/components/sections/utils/Icon.svelte';
    import Card from './Card.svelte'

</script>

<section class="projects wrapper" id="projects">
    <div class="projects-title">
        <!-- <Icon class="icon" viewbox={projectsIcon.viewbox}  d={projectsIcon.d} height={20} width={20} /> -->
        <h2>Projects</h2>
        <p>What I've built.</p>
    </div>

    <div class="projects-content">
        <!-- <Card /> -->
        <!-- <Card /> -->
        <!-- <Card /> -->
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
    </div>
</section>

<style lang="scss">
    .projects{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem;
    }

    .projects-title{
        display: flex;
        flex-direction: column;
        padding-bottom: 3rem;
        gap: .25rem;
    }
    
    .projects-content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .box {
        background-color: var(--clr-secondary);
        padding: 20px;
        height: 300px;
        text-align: center;
        border-radius: 2rem;
    }

    @media (min-width: 768px) {
        .box1 {
            grid-column: span 2;
        }
    }
    // .project-card{
    //     width: 350px;
    //     height: 400px;
    //     background-image: radial-gradient(121.65% 100% at 32.68% 0,#3c4155 0,rgba(60,65,85,.18) 32.49%,rgba(60,65,85,0) 51.34%),radial-gradient(91.41% 43.04% at 50% 0,#1a1c24 20.67%,rgba(26,28,36,0) 100%),radial-gradient(69.96% 25.89% at 50% 100%,#15171e 22.77%,rgba(19,21,27,0) 100%);
	// 	box-shadow: 2px 4px 6px 0px var(--clr-primary);
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: space-between;
    // }

    // .project-links{
    //     display: flex;
    //     justify-content: space-evenly;
    //     & button{
    //         background-color: var(--clr-accent);
    //         border: 0;
    //         padding: 1rem;
    //     }
    // }
    
    // img{
    //     max-height: 300px;
    //     max-width: 350px;
    // }
</style>