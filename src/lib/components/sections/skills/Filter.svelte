<script lang="ts">
	import type { Writable } from "svelte/store";

    export let filterName: Writable<string>

    function setActive(name: string) {
        $filterName= name
    }


</script>
<div class="filter">
    <button 
        class:active={$filterName === 'all'} 
        on:click={() => setActive('all')}
    >
        All
    </button>
    <button 
        class:active={$filterName === 'frontend'} 
        on:click={() => setActive('frontend')}
    >
        Frontend
    </button>
    <button 
        class:active={$filterName === 'backend'} 
        on:click={() => setActive('backend')}
    >
        Backend
    </button>
    <button 
        class:active={$filterName === 'misc'} 
        on:click={() => setActive('misc')}
    >
        Misc
    </button>
</div>

<style lang="scss">
    .filter {
        display: flex;
        height: 35px;
        align-items: center;
        // border-radius: 1rem;
        gap: .75rem;
        
        & button {
            background-color: var(--clr-primary);
            color: var(--clr-text);
            cursor: pointer;
            font-size: var(--fs-reg);
            font-weight: var(--fw-bold);
            border: 0;
            border: 2px solid var(--clr-hover);
            width: 90px;
            height: 60px;
            border-radius: .5rem;
            // border-right: 2px solid var(--clr-accent);
            // border-top: 2px solid var(--clr-accent);
            // border-bottom: 2px solid var(--clr-accent);

            &:first-child {
                // border-top-left-radius: 1rem;
                // border-bottom-left-radius: 1rem;
                // border-left: 2px solid var(--clr-accent);
            }
            &:last-child{
                // border-top-right-radius: 1rem;
                // border-bottom-right-radius: 1rem;
                // border-right: 2px solid var(--clr-accent);
            }
            &:hover {
                background-color: var(--clr-hover);
            }
            &.active {
                color: var(--clr-accent);
                border: 1px solid var(--clr-accent);
            }
        }
    }
</style>