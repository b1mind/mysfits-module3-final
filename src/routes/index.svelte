<script context="module">
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section class="light">
  <div class="wrap">
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing</h1>
    <p class="title-med">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dicta nostrum! Dicta beatae quo
      consequuntur inventore provident magni.
    </p>
    <button>connect ></button>
  </div>
</section>

<section class="light">
  <div class="wrap">
    <div class="title">About</div>
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
  <div class="wrap">
    <div class="title">Blog</div>
    <h2>Latest news, and opinions</h2>
  </div>
</section>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  section {
    padding: 4rem 0;
    background-color: var(--clr-bg, var(--clr-neutral-200));
    border-radius: 2rem;

    &.light {
      --clr-bg: var(--clr-neutral-100);
    }

    &.accent {
      --clr-bg: var(--clr-primary-300);
    }
  }

  .wrap {
    max-width: 77ch;
    margin: 0 auto;
  }
</style>
