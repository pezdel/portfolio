<script lang="ts">
    export let name: string
</script>

<div class={$$props.class}>
    <div class="left">
        <h2>{name}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odio aut necessitatibus explicabo</p>
        <div>
            <a href="#">Github</a>
            <a href="#">Live</a>
        </div>
    </div>
    <div class="right">
        Img
    </div>
</div>


<style lang="scss">
    .card{
        display: grid;
        background-color: var(--clr-secondary);
        height: 250px;
        padding: 2.5rem;
        border-radius: 1rem;
        grid-column: span 1;
        grid-template-columns: 1fr 1fr;
    }
    .main-project{
        grid-column: span 2;
    }
    @media(width < 768px){
        .main-project{
            grid-column: span 1;
        }
    }
    
</style>