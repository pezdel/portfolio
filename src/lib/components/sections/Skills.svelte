<script lang="ts">
    import Filter from './skills/Filter.svelte'
    import { skillsIcon } from '$lib/utils/svgs';
	import { writable } from 'svelte/store';
	import Icon from '$lib/components/utils/Icon.svelte';
	import Cards from './skills/Cards.svelte';


    const filterName = writable("all")
</script>

<section class="skills" id="skills">
    <div class="skills__header">
        <div>
            <h2>Skills & Abilities</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
            <Filter filterName={filterName} />
        </div>
    </div>

    <div class="skills__content">
        <Cards filterName={filterName} />
    </div>
</section>


<style lang="scss">
    .skills{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .skills__header{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding-bottom: 3rem;
        gap: .25rem;
    }
</style>