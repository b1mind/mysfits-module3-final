<section class="light">
  <div class="container">
    <h2>Inbox</h2>
    <div class="title">Knowledge letters</div>

    <div class="img space-lg">
      <img src="/img/newsletter.jpg" alt="Subscribe for newsletter" />
    </div>

    <form class="flex" on:submit|preventDefault>
      <label for="name">Name<input type="text" placeholder="Your Name" /></label
      >
      <label>Email<input type="text" placeholder="email@domain.com" /></label>
      <button class="btn"
        >Subscribe
        <svg class="btn-icon" width="18" height="18" viewBox="0 0 24 24">
          <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z" />
        </svg>
      </button>
    </form>
  </div>
</section>

<style lang="scss">
  .flex {
    align-items: flex-end;
  }

  img {
    object-fit: cover;
  }

  form {
    padding: 1em;
  }

  label,
  input {
    width: 90%;
    padding: 0.3em;
  }

  label {
    font-size: var(--fs-200);
  }

  input {
    display: block;
    font-size: var(--fs-400);
    border: none;
    border-bottom: 1px solid var(--clr-neutral-300);
    border-radius: 0;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--clr-neutral-300);
    }
  }
</style>
