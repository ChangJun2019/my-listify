export default defineNuxtConfig({
  extends: [
    'listify-theme'
  ],

  app: {
    head: {
      title: `ChangJun's listify` ,
      meta: [
        { name: 'author', content: 'ChangJun' },
        { name: 'keywords', content: '常峻，书单，读书，追剧，电影，游戏，订阅，购物，集合' },
        { name: 'description', content: '极简化记录分享我的书单、观影、电影、游戏等' },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: `/blog-apple-touch-icon.png` },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/blog-favicon-32x32.png` },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/blog-favicon-16x16.png` },
      ],
    },
  },
})
