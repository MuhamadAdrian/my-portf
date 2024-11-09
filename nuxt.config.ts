// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', '@vueuse/nuxt', '@hypernym/nuxt-gsap'],
  plugins: [

  ],
  // ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    display: 'swap',
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  typescript: {
    typeCheck: true,
    strict: true,
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },
})
