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
const VUE_DOCS = isProd ? '/colelab-icons/vue/' : 'http://localhost:5173/';
const REACT_DOCS = isProd ? '/colelab-icons/react/' : '/';

export default defineConfig({
  base,
  publicPath: base,
  themeConfig: {
    name: 'Icons',
    logo,
    nav: [
      { title: 'Vue 文档', link: VUE_DOCS },
      { title: 'React 文档', link: REACT_DOCS },
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
