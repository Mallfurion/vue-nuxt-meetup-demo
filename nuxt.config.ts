// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  css: ["assets/scss/main.scss"],
  ssr: false,
  app: {
    head: {
      viewport: "width=device-width, initial-scale=1",
      title: "Vue & Nuxt | JSHeroes",
    },
  },
});
