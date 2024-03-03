import { defineConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  define:{
    BASE_API_URL: JSON.stringify('http://localhost:8090'),
    API_URL: JSON.stringify('http://localhost:8090/api/collections'),
    // POSTS_PER_PAGE: 4,
  }

})
