<script context="module">
  //todo use import to get page
  export async function load({ fetch, page }) {
    let slugTitle = page.params.slug.split('-').join(' ')
    let slugId = page.query.get('id')
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slugId}/`
    )
    let post = await res.json()

    return { props: { slugTitle, post } }
  }
</script>

<script>
  // import {page} from '$lib/stores'
  export let slugTitle
  export let post
</script>

<svelte:head>
  <title>
    {slugTitle}
  </title>
</svelte:head>

<h1>
  {post.title}
</h1>
<p>{post.body}</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, delectus
  suscipit. Sapiente amet blanditiis quaerat voluptatibus nam cum impedit
  debitis voluptatem est voluptates, odit libero magnam sint. Expedita, nemo
  tenetur?
</p>
