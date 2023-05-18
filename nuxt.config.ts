// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    strict: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@formkit/nuxt',
    'nuxt-icon',
  ],

  headlessui: { prefix: '' },
})
