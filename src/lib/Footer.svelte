<script>
</script>

<footer>
  <div class="container">
    <section class="footer-nav">
      <img src="/logo.svg" alt="Acme" />
      <nav class="space">
        <h2>Map</h2>
        <ul class="space">
          <li>Blog</li>
          <li>Privacy</li>
        </ul>
      </nav>

      <nav class="space">
        <h2>Resources</h2>
        <ul class="space">
          <li>Courses</li>
          <li>Hacks</li>
          <li>Free Stuff</li>
        </ul>
      </nav>
    </section>
    <section class="footer-text flex">
      <p>Copyright stuffs 2021</p>
      <nav class="social">gh ig cp tw</nav>
    </section>
  </div>
</footer>

<style lang="scss">
  section {
    --clr-bg: var(--clr-neutral-100);
  }

  .footer-nav {
    width: 100%;
    margin-top: 5rem;
    padding: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid var(--clr-neutral-200);
    border-bottom: 1px solid var(--clr-neutral-200);
    border-radius: 0;

    h2 {
      font-family: var(--ff-sans);
      font-size: var(--fs-400);
    }
  }

  .footer-text {
    padding: 2.5rem 0;
  }
</style>
