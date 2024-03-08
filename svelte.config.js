// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      // If your app is served from the root directory, you might not need `base`
      base: '/subdirectory', // Update this to your serving path
    },
    // Other configurations...
  },
  preprocess: preprocess(),
};

export default config;
