<script>
  import '../app.scss';

  import Header from '$lib/header/Header.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<footer>
  <ul>
    <li>link</li>
    <li>link</li>
    <li>link</li>
    <li>link</li>
  </ul>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
  }
</style>
