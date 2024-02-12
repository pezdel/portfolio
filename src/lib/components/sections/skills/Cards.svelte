<script lang="ts">
    import {fade} from 'svelte/transition';
	import Icon from "$lib/components/utils/Icon.svelte";
    import { svgSkills } from '$lib/utils/svgs'
    import type { Svgs } from '$lib/utils/svgs'
	import type { Writable } from "svelte/store";


    export let filterName: Writable<string>

    let matchingSkills: Svgs = []
    let nonMatchingSkills: Svgs = []

    $: {
        if($filterName === "all"){
            matchingSkills = svgSkills
            nonMatchingSkills = []
        }else{
            matchingSkills = svgSkills.filter(skill => skill.type === $filterName)
            nonMatchingSkills = svgSkills.filter(skill => skill.type !== $filterName)
        }
    }
</script>

<div class="skills-cards">
    {#each matchingSkills as svg (svg)}
        <figure in:fade class="skills-card non" >
            <Icon class="icon" d={svg.d} viewbox={svg.viewbox} />
            <figcaption>{svg.name}</figcaption>
        </figure>
    {/each}

    {#each nonMatchingSkills as svg(svg)}
        <figure class="skills-card gray-out">
            <Icon class="icon" d={svg.d} viewbox={svg.viewbox} />
            <figcaption>{svg.name}</figcaption>
        </figure>
    {/each}
</div>


<style lang="scss">
    .skills-cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
    }
    
    .skills-card {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--clr-secondary);
        color: white;
        height: 140px;
        border-radius: .75rem;

        & figcaption {
            position: absolute;
            bottom: 0;
            left: 50;
            font-style: italic;
            font-size: 0.9em;
            color: #667;
            text-align: center;
        }
    }
    @media(width < 576px){
        .skills-cards{
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: .2rem;
        }
        .skills-card {
            height: 100px;
            border-radius: .5rem;
        }
    }
</style>