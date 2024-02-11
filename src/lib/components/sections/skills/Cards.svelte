<script lang="ts">
    import {flip} from 'svelte/animate';
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
        <figure in:fade animate:flip={{duration: 400}} class="skills-card non" >
            <Icon class="icon" d={svg.d} viewbox={svg.viewbox} />
            <figcaption>{svg.name}</figcaption>
        </figure>
    {/each}

    {#each nonMatchingSkills as svg(svg)}
        <figure animate:flip={{duration: 400}} class="skills-card gray-out">
            <Icon class="icon" d={svg.d} viewbox={svg.viewbox} />
            <figcaption>{svg.name}</figcaption>
        </figure>
    {/each}
</div>


<style lang="scss">
    .gray-out{
        opacity: .1;
    }
    .non{
        opacity: 1;
    }
    .skills-cards{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;
    }
    .skills-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 140px;
        height: 140px;
        border-radius: 1rem;
        // background-color: rgb(13 14 18/1);
        // background-image: radial-gradient(121.65% 100% at 32.68% 0, #3c4155 0, rgba(60, 65, 85, .18) 32.49%, rgba(60, 65, 85, 0) 51.34%),
        //                 radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%),
        //                 radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%);
        box-shadow: 0 -1px 1px 0 var(--clr-text);
        background-color: var(--clr-secondary);
        transition: box-shadow 0.3s ease; 


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
</style>