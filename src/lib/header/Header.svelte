<script>
  import { page } from '$app/stores';

  $: header = $page.path === '/' ? '/img/hero.jpg' : `/img/${$page.path}.jpg`;
</script>

<header style="--header-img: url({header});">
  <div class="corner">
    <a href="#void">
      <img src="/logo.svg" alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <ul>
      <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.path === '/blog'}><a sveltekit:prefetch href="/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
  @use '../scss/vars' as *;

  header {
    width: 100%;
    max-width: $mediaLg;
    min-height: 500px;
    margin: 0 auto;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--header-img, url('/img/hero.jpg')) no-repeat center;
    background-size: cover;
    border-radius: 2rem;
  }

  .corner {
    width: 3em;
    height: 3em;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 3rem;
    height: 2rem;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
