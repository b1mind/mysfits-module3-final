<script context="module">
  //todo update with import?
  export async function load({ fetch, page }) {
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

<div class="container">
  <div class="flex wrap">
    {#each posts as { id, title, body }}
      <Card {id} {title} img={`blog-${id}.jpg`} {body} />
    {/each}
  </div>
</div>

<Inbox />
