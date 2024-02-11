<script lang="ts">
    import Filter from './skills/Filter.svelte'
    import Cards from './skills/Cards.svelte'
    import { skillsIcon } from '$lib/utils/svgs';
	import { writable } from 'svelte/store';
	import Icon from '$lib/components/utils/Icon.svelte';


    const filterName = writable("all")
</script>

<section class="skills wrapper" id="skills">
    <div class="skills__title">
        <div class="left">
            <h2>Skills & Abilities</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="right">
            <Filter filterName={filterName} />
        </div>
    </div>

    <div class="skills__content">
        <div class="box box1">1</div>
        <div class="box box2">2</div>
        <div class="box box3">3</div>
        <div class="box box1">4</div>
        <div class="box box2">5</div>
        <div class="box box3">6</div>
        <div class="box box1">7</div>
        <div class="box box2">8</div>
        <div class="box box3">9</div>
        <div class="box box1">10</div>
        <div class="box box2">11</div>
        <div class="box box3">12</div>
        <div class="box box3">13</div>
        <div class="box box3">14</div>
        <div class="box box3">15</div>
        <div class="box box3">16</div>
        <div class="box box3">17</div>
        <div class="box box3">18</div>
        <div class="box box3">19</div>
        <div class="box box3">20</div>
        <div class="box box3">21</div>
        <div class="box box3">22</div>
        <div class="box box3">23</div>
        <div class="box box3">24</div>
        <!-- <Cards filterName={filterName} /> -->
    </div>
</section>


<style lang="scss">
    .skills{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5rem;
    }
    .skills__title{
        display: flex;
        justify-content: space-between;
        align-items: end;
        padding-bottom: 3rem;
        gap: .25rem;

    }
    // .skills__content{
    //     display: flex;
    //     flex-direction: column;
    //     gap: 1rem;
    // }

    .skills__content{
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 1rem;
    }
    .box {
        background-color: var(--clr-secondary);
        padding: 20px;
        height: 125px;
        text-align: center;
        border-radius: 1rem;
    }

    @media (width < 768px) {
        .skills{
            padding: 1rem;
        }
        .skills__content{
            grid-template-columns: repeat(5, 1fr);
            gap: .25rem;
        }
        .box1 {
            grid-column: span 1;
        }
    }
    
</style>