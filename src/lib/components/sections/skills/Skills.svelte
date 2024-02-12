<script lang="ts">
    import Filter from './Filter.svelte'
    import { skillsIcon } from '$lib/utils/svgs';
	import { writable } from 'svelte/store';
	import Icon from '$lib/components/utils/Icon.svelte';
	import Cards from './Cards.svelte';


    const filterName = writable("all")
</script>

<section class="skills" id="skills">
    <div class="skills__header">
        <div>
            <h2>Skills & Abilities</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Filter filterName={filterName} />
    </div>

    <Cards filterName={filterName} />
</section>


<style lang="scss">
    .skills{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .skills__header{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2rem;
        gap: 1rem;
    }
</style>