import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
   base: '/lipn-docs/',
  title: "Lipn docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'TypeScript', link: '/components/ts' },
      { text: '基础知识', link: '/components/baseQuestions' },
      { text: '微前端', link: '/components/microFrontend' }
    ],

    sidebar: [
      {
        text: '基础篇',
        items: [
          { text: 'TypeScript', link: '/components/ts' },
          { text: '基础知识', link: '/components/baseQuestions' }
        ]
      },
      {
        text: '高级篇',
        items: [
          { text: '微前端', link: '/components/microFrontend' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
