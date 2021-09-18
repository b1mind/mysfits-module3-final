<script context="module">
  import Card from '$lib/Card.svelte';
  import Inbox from '$lib/Inbox.svelte';

  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="light">
  <div class="container space">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
    <p class="title-med">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dicta nostrum! Dicta beatae quo
      consequuntur inventore provident magni.
    </p>
    <button>connect ></button>
  </div>
</section>

<section class="light">
  <div class="container">
    <h2>About</h2>
    <p class="title-med">
      Tenetur eos! Expedita, quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </p>

    <p class="title-med">
      Officiis tenetur voluptate odit sequi eum ex? Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Distinctio, adipisci.
    </p>
  </div>
</section>

<section class="accent">
  <div class="container">
    <h2>Blog</h2>
    <div class="title">Latest news, and opinions</div>
    <div class="flex wrap">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</section>

<Inbox />

<style lang="scss">
  @use '../lib/scss/vars' as *;

  .light {
    --clr-bg: var(--clr-neutral-100);
  }

  .accent {
    --clr-bg: var(--clr-primary-300);
  }

  .space {
    --spacer: 2rem;
  }
</style>
