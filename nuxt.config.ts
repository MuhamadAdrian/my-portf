// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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

  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry'))
            css.splice(i, 1)
        }
      }
    },
  },
})
