
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    //'iview/dist/styles/iview.css'
    'view-design/dist/styles/iview.css',
    '~assets/css/main.css',
    '~assets/font-awesome-4.7.0/css/font-awesome.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/utils',
    '@/plugins/axios',
    '@/plugins/i18n'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true, // 表示开启代理
    credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/proxy': {
      target: 'http://campusttest.9451.org:10201', // 目标接口域名
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/proxy': '/', // 把 /api 替换成 /
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    vendor: ['axios','utils','iview','i18n'] //为防止重复打包
  },
  router: {
    middleware: ['state','webMiddle','i18n']
  }
}
