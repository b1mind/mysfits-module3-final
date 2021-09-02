/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/mysfits-module3-final'
    }
  }
};

export default config;
