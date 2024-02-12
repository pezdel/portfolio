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
        grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
        justify-items: center;
        grid-gap: 1rem;
    }
    
    .skills-card {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--clr-secondary);
        color: white;
        height: 140px;
        width: 140px;
        border-radius: 1rem;

        & figcaption {
            position: absolute;
            bottom: 0;
            left: 50;
            font-style: italic;
            font-size: 0.9em;
            color: #667;
            text-align: center;
        }

        &:hover {
            box-shadow: 0 -1px 2px 1px var(--clr-text);
        }
    }
    @media(width < 576px){
        .skills-cards{
            grid-template-columns: repeat(3, 1fr);
            grid-gap: .5rem;
        }
        .skills-card {
            height: 100px;
            width: 100px;
        }

    }
    
</style>