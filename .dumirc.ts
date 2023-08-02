import { defineConfig } from 'dumi';

const repo = 'un-fix.github.io';

export default defineConfig({
  themeConfig: {
    name: 'un-fix.github.io',
  },
  title: 'un-fix.github.io',
  mode: 'site',
  // devServer: {
  //   port: 1998, // 自定义端口号
  // },
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
});
