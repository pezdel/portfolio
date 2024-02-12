<script lang="ts">
    import Icon from '$lib/components/sections/utils/Icon.svelte'
	import { github, codepen, linkedin } from '$lib/utils/svgs';
</script>

<div class="footer">
    <div class="links">
        <Icon class="social-icon" height={30} width={30} d={github.d} viewbox={github.viewbox} />
        <Icon class="social-icon" height={30} width={30} d={codepen.d} viewbox={codepen.viewbox} />
        <Icon class="social-icon" height={30} width={30} d={linkedin.d} viewbox={linkedin.viewbox} />
    </div>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
</div>


<style lang="scss">
    .footer{
        background-color: var(--clr-secondary);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
    }
    .links{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        font-size: var(--fs-reg);
        font-weight: var(--fw-reg);
        color: #667;
    }
</style>