<script context="module">
  //todo update with import?
  export async function load({ fetch }) {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let posts = await res.json()
    posts = posts.filter((index) => index.id <= 8)

    return {
      props: {
        posts
      }
    }
  }
</script>

<script>
  import Card from '$lib/Card.svelte'
  import Inbox from '$lib/Inbox.svelte'

  export let posts
</script>

<svelte:head>
  <title>Blog - acme</title>
</svelte:head>

<section>
  <div class="container">
    <header class="flex">
      <nav>
        <ul>
          <li><a href="#void">Design</a></li>
          <li><a href="#void">Front-End</a></li>
          <li><a href="#void">Back-End</a></li>
          <li><a href="#void">Web</a></li>
          <li><a href="#void">Apps</a></li>
        </ul>
      </nav>
      <button class="btn"
        >Subscribe

        <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24">
          <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
        </svg>
      </button>
    </header>
  </div>

  <div class="container">
    <div class="grid">
      {#each posts as { id, title, body }}
        <div class="card">
          <Card {id} {title} img={`blog-${id}.jpg`} {body} />
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="container">
  <section class="boarder">
    <a href="#void"> More Articles </a>
  </section>
</div>

<Inbox />

<style lang="scss">
  @use '../../lib/scss/vars' as *;
  header {
    padding: 2rem;
    align-items: center;

    @media (max-width: $mediaSml) {
      display: none;
      visibility: hidden;
    }
  }

  section:first-child {
    @media (min-width: $mediaSml) {
      padding-top: 0;
    }
  }

  .boarder {
    text-align: center;
  }

  a {
    font-weight: var(--fw-700);
  }

  @media (min-width: $mediaMed) {
    .card:first-child {
      grid-column: 1 / -1;
    }

    .card:nth-child(5n + 3) {
      grid-column: 3 / 4;
    }

    .card:nth-child(5n + 2) {
      grid-column: 1 / 3;
    }
  }
</style>
