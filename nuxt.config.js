const cheerio = require('cheerio')
module.exports = {
  head: {
    title: 'Aman Bhimani: Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description',
        content: 'Aman Bhimani - Software Engineer based in Atlanta, Georgia. Personal and Professional portfolio; welcome to my little cornder of the internet!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
  modules: [
    '@nuxtjs/markdownit',
    'vue-scrollto/nuxt'
  ],
  markdownit: {
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    html: true
  }
}
