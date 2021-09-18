<script>
  export let shape = {
    title: 'Some title goes here',
    summary: 'Short summary needs to go here',
    content:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ab enim consectetur dolor tempora dicta, quibusdam obcaecati distinctio non sapiente ad, voluptas architecto! Temporibus tempora ratione beatae alias aliquam illum!',
    img: 'blog-1.jpg'
  };
</script>

<article class="space">
  <!-- //todo find out which way you want to do post images... -->
  <div class="img" style="--post-img: url('/img/{shape.img}');">
    <img src="/img/{shape.img}" alt={shape.title} />
  </div>
  <h3>{shape.title}</h3>
  <p>{shape.summary}</p>

  <footer class="flex">
    <time class="title-sml" datetime="2021-10-08">Oct 8</time>
    <time class="title-sml" datetime="PT08M">8 min <span>read</span></time>
  </footer>
</article>

<style lang="scss">
  article {
    width: 225px;
  }

  .img {
    // height: 175px;
    // background: var(--post-img, url('/img/blog-1.jpg')) no-repeat center;
    // background-size: cover;
    border-radius: 1rem;
    overflow: hidden;
  }

  img {
    height: 175px;
    object-fit: cover;
  }

  p {
    font-size: var(--fs-400);
    line-height: 1.2;
  }

  footer.flex {
    justify-content: flex-start;

    & > * + * {
      margin-left: 2rem;
    }
  }
</style>
