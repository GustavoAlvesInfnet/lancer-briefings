


import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  define: {
    __dirname: JSON.stringify(resolve('.'))
  }
});

// https://vitejs.dev/config/
