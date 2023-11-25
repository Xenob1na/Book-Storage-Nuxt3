// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  modules: [ 
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/Book-Storage-Nuxt3/',
    buildAssetsDir: 'assets',
  }
})
