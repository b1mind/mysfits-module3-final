<script>
  import Header from '$lib/Header.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <img src="/logo.svg" alt="Acme" />
  <nav>
    <h2 class="title">Map</h2>
    <ul>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
    </ul>
  </nav>

  <nav>
    <h2 class="title">Recent</h2>
    <ul>
      <li>link</li>
      <li>link</li>
      <li>link</li>
      <li>link</li>
    </ul>
  </nav>
</footer>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  main {
    width: 100%;
    max-width: $mediaLg;
    margin: 0 auto;
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
  }
</style>
