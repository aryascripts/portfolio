const cheerio = require('cheerio')
module.exports = {
  /*
  ** Headers of the page
  */
  hooks: {
    // This hook is called before rendering the html to the browser
    'render:route': (url, result) => {
      this.$ = cheerio.load(html)
      this.$('#__nuxt').removeAttr('data-server-rendered').removeAttr('id')
      this.$(`body script[src="/_nuxt/app.js"]`).remove()
      this.$(`head link[href="/_nuxt/app.js"]`).remove()
      result.html = this.$.html()
    }
  },
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
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
