import { defineConfig } from 'dumi';

export default defineConfig({
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  themeConfig: {
    name: 'un-fix',
    logo: '/logo.png',
    footer: 'Power by un-fix',
    socialLinks: {
      github: 'https://github.com/un-fix/un-fix.github.io',
      yuque: 'https://www.yuque.com/changweihua',
    },
    // 单语言时配置数组即可
    nav: [{ title: '最新活动', link: '/avtivity' }],
    // // 多语言时配置对象，key 为语言名
    // nav: {
    //   'zh-CN': [{ title: '博客', link: '/blog' }],
    //   'en-US': [{ title: 'Blog', link: '/en/blog' }],
    // },
    // // 支持通过 nav 将路由追加到约定路由前面或后面
    // nav: {
    //   // mode可选值有：override、append、prepend
    //   // - override: 直接覆盖约定导航，与 nav: [{ title: 'Blog', link: '/blog' }] 配置相同
    //   // - append: 将 value 中的导航追加到约定路由后面
    //   // - prepend: 将 value 中的导航添加到约定路由前面
    //   mode: "append",
    //   value: [{ title: 'Blog', link: '/blog' }]
    // }
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {} //在umi中，表示启用该插件
});
