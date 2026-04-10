export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    token: '',
    public: {
      apiurl: '',
      imageurl: '',
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
      title: 'Магазин Shoppe',
      htmlAttrs: {
        lang: 'ru',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
        { rel: 'manifest', href: '/manifest.webmanifest', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' },
      ],
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
