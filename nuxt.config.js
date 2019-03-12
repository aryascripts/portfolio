module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Aman Bhimani: Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt JS portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Trochut'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Imprima'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200' }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  plugins: [
    '~/plugins/directives.js'
  ],
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  markdownit: {
    'injected': true
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  serverMiddleware: [
    '~/server/index.js'
  ]
}
