export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    token: process.env.NUXT_TOKEN,
    public: {
      apiurl: process.env.NUXT_PUBLIC_APIURL || 'http://localhost:3000/api',
      imageurl: process.env.NUXT_PUBLIC_IMAGEURL || 'http://localhost:3000',
    },
  },
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 24678,
      },
      watch: { usePolling: true },
    },
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
    },
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' }],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
      },
    ],
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@nuxt/icon', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/styles/main.css'],
});
