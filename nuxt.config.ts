export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    token: "",
    public: {
      apiurl: process.env.NUXT_PUBLIC_API_URL || "http://localhost:3000/api",
    },
  },
  postcss: {
    plugins: {
      "postcss-nested": {},
    },
  },
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" }],
    },
  },
  icon: {
    customCollections: [
      {
        prefix: "icons",
        dir: "./assets/icons",
      },
    ],
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "@nuxt/scripts", "@nuxt/icon"],
  css: ["~/assets/styles/main.css"],
});
