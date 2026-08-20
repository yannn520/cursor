// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const SITE_NAME = '黫桃小丸子的小遊標'
const SITE_DESC = '來下載我的可愛小遊標吧！'
const SITE_URL = 'https://yannn520.github.io/'
const SITE_IMG = `${SITE_URL}/thumbnail.jpg`

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@vueuse/nuxt',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },
  app: {
    baseURL: '/cursor/',
    head: {
      title: SITE_NAME,
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: SITE_DESC },
        { name: 'theme-color', content: '#e284a4' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: SITE_NAME },
        { name: 'twitter:description', content: SITE_DESC },
        { name: 'twitter:image', content: SITE_IMG },

        { property: 'og:title', content: SITE_NAME },
        { property: 'og:description', content: SITE_DESC },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:image', content: SITE_IMG },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_Hant' },
      ],
    },
  },

  css: [
    '@/assets/css/main.css',
  ],

  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
    priority: ['fontsource', 'bunny', 'google'],
    families: [
      { name: 'Chiron GoRound TC' },
      { name: 'Metropolis' },
    ],
  },
})
