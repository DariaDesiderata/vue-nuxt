module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', '@/assets/css/main.scss'],
  /*
  ** Loading
  */
  loading: {
    color: 'blue',
    failedColor: 'red',
    height: '5px',
    duration: 5000
  },
  /*
  ** For a custom loading component loading: '~/components/loading.vue'
  */
  /*
  ** Add transitionios between pages
  */
  transition: {
    name: 'component-fade',
    mode: 'out-in'
  },
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
