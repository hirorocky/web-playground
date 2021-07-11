import Sass from 'sass'
import Fiber from 'fibers'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/web-playground/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-playground',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/web-playground/favicon.png',
        size: '32x32',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-scrollto',
    { src: '~/plugins/aos', ssr: false },
    '~/plugins/kinesis',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Kosugi: true,
          'Russo+One': true,
          'Noto+Sans+JP': [100, 300, 500, 700],
        },
        display: 'optional',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['vue-scrollto/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
}
