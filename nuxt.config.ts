// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: [ 
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/main.css'],
})
