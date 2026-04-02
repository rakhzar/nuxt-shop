export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    token: '',
    public: {
      apiurl: '',
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts'],
  css: ['~/assets/styles/main.css'],
});
