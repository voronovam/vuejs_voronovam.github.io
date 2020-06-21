module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'voronovam | Frontend/UI',
    htmlAttrs: {
      lang: 'en',
    },
    style: [
      { innerHTML: '.async-hide { opacity: 0 !important}'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.5.0.min.js', type: 'text/javascript' },
    ],
    __dangerouslyDisableSanitizers: ['script', 'style'],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,700&display=swap'},
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favs/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favs/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favs/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favs/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favs/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favs/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favs/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favs/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favs/apple-touch-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favs/apple-touch-icon-180x180.png' },
    ]
  },
  router: {
    base: '/',
    linkExactActiveClass: 'exact-active-link',
    //mode: 'hash'
    mode: 'history'
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  plugins: [
    {
      src: '~plugins/scripts.js',
      mode: 'client'
    },
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#F638DC' },
  styleResources: {
    sass: [
      "~assets/sass/main.sass",
    ],
  },
  css: [
    '~node_modules/animate.css/animate.min',
    { src: '@assets/sass/main.sass', lang: 'sass'},

  ],
  generate: {
    fallback: true,
    dir: '/Users/voronovam/dev/voronovam.github.io'
  },
  target: 'static',
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    html: {
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        preserveLineBreaks: false,
        decodeEntities: true,
        html5: true,
        includeAutoGeneratedTags: true,
        keepClosingSlash: false,
        minifyCSS: true,
        minifyJS: true,

        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    },

    loaders: {
      vue: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    },

    extend (config, { isDev, isClient }) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /(node_modules|bower_components)/
      });
      config.module.rules.push({
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      });
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|bower_components)/
        });
      }
      config.resolve.alias.bootstrap = 'bootstrap-sass/assets/javascripts/bootstrap.js';
    }
  }
}

