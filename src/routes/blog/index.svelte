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
  .boarder {
    text-align: center;
  }

  a {
    font-weight: var(--fw-700);
  }

  @media (min-width: $mediaMed) {
    .card:first-child {
      grid-column: 1 / 4;
    }

    .card:nth-child(5n + 3) {
      grid-column: 3 / 4;
    }

    .card:nth-child(5n + 2) {
      grid-column: 1 / 3;
    }
  }
</style>
