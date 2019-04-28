import pkg from './package';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-aspect-ratio-mini': {}, // 用来处理元素容器宽高比。
        'postcss-write-svg': { // 用来处理移动端1px的解决方案。
          utf8: false,
        },
        'postcss-cssnext': {},
        'postcss-px-to-viewport': {
          viewportWidth: 750, // 设计稿宽度
          viewportHeight: 1334, // 设计稿高度，可以不指定
          unitPrecision: 3, // px to vw无法整除时，保留几位小数
          viewportUnit: 'vw', // 转换成vw单位
          selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
          minPixelValue: 1, // 小于1px不转换
          mediaQuery: false, // 允许媒体查询中转换
        },
        'postcss-viewport-units': {},
        'cssnano': { // 压缩css
          preset: 'advanced',
          autoprefixer: false, // 和cssnext同样具有autoprefixer，保留一个
          'postcss-zindex': false,
        },
      },
    },
  },
};
