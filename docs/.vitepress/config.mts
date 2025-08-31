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
      { text: '面试题', link: '/components/baseQuestions' }
    ],

    sidebar: [
      {
        text: '基础篇',
        items: [
          { text: 'TypeScript', link: '/components/ts' },
          { text: '面试题', link: '/components/baseQuestions' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
