import { defineConfig } from 'vitepress';

const REPO = 'https://github.com/cole0307mail-debug/colelab-icons';
const REACT_DOCS = '/colelab-icons/react/';

export default defineConfig({
  appearance: true,
  base: '/colelab-icons/vue/',
  title: 'Cole Icons',
  description: 'Icon docs for Vue/React',
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg',
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Cole Icons（Vue）',
      description: 'Vue 图标组件文档',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/getting-started' },
          { text: '图标', link: '/components/icons-vue' },
          { text: 'React 文档', link: REACT_DOCS },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '指南',
              items: [
                { text: '快速开始', link: '/guide/getting-started' },
                { text: '开发与贡献', link: '/guide/contribution-guide' },
                { text: 'SVG 设计规范', link: '/guide/icon-design-spec' },
                { text: '命令使用说明', link: '/guide/scripts-usage' },
              ],
            },
          ],
          '/components/': [
            {
              text: '组件',
              items: [
                { text: '图标总览', link: '/components/icons-vue' },
                { text: '图标分类', link: '/components/icon-categories' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: REPO }],
        outline: { level: [2, 3] },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Cole Icons (Vue)',
      description: 'Vue icon component docs',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'Components', link: '/en/components/icons-vue' },
          { text: 'React Docs', link: REACT_DOCS },
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/getting-started' },
                { text: 'Contribution Guide', link: '/en/guide/contribution-guide' },
                { text: 'SVG Design Spec', link: '/en/guide/icon-design-spec' },
                { text: 'Scripts Usage', link: '/en/guide/scripts-usage' },
              ],
            },
          ],
          '/en/components/': [
            {
              text: 'Components',
              items: [
                { text: 'Icons Vue', link: '/en/components/icons-vue' },
                { text: 'Icon Categories', link: '/en/components/icon-categories' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: REPO }],
      },
    },
  },
});
