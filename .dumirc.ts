import path from 'path';
import { defineConfig } from 'dumi';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/sensoro-design.svg';

const isProd = process.env.NODE_ENV === 'production';

const prodConfig = isProd
  ? defineConfig({
      ssr: {},
      mfsu: false,
    })
  : defineConfig({});

const base = '/colelab-icons/react/';

export default defineConfig({
  base,
  publicPath: base,
  themeConfig: {
    name: 'Icons',
    logo,
    navs: [
      { title: 'Vue 文档', link: '/colelab-icons/vue/' },
      { title: 'React 文档', link: '/colelab-icons/react/' },
    ],
    socialLinks: {
      github: 'https://github.com/cole0307mail-debug/colelab-icons',
    },
  },
  alias: {
    '@colelab/icons-svg/es': path.resolve(__dirname, './packages/core/src'),
    '@colelab/icons-svg': path.resolve(__dirname, './packages/core/src/index.ts'),
    '@colelab/icons-react/es': path.resolve(__dirname, './packages/react/src'),
    '@colelab/icons-react': path.resolve(__dirname, './packages/react/src/index.ts'),
  },
  favicons: [logo],
  hash: true,
  ...prodConfig,
});
