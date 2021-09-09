<script>
  import { page } from '$app/stores';
  import logo from '/static/logo.svg';

  let header = $page.path === '/' ? 'img/hero.jpg' : `img/${$page.path}.jpg`;
</script>

<header data-header={header} style="--header-img: url({header});">
  <div class="corner">
    <a href="https://kit.svelte.dev">
      <img src={logo} alt="SvelteKit" />
    </a>
  </div>

  <nav>
    <ul>
      <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
    </ul>
  </nav>

  <div class="corner">
    GitHub
    <!-- TODO put something else here? github link? -->
  </div>
</header>

<style lang="scss">
  @use '../scss/vars' as *;

  header {
    max-width: 1200px;
    min-height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--header-img, url('img/hero.jpg')) no-repeat center;
    background-size: cover;
    border-radius: 2rem;
  }

  [data-header='/'] {
    background: url('img/hero.jpg') no-repeat center;
    background-size: cover;
  }

  [data-header='blog'] {
    background: url('img/blog.jpg') no-repeat center;
    background-size: cover;
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
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgba(255, 255, 255, 0.7);
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
