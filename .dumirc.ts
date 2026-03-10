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

export default defineConfig({
  base,
  publicPath: base,
  themeConfig: {
    name: 'Icons',
    logo,
    socialLinks: {
      github: 'https://github.com/cole0307mail-debug/colelab-icons',
    },
  },
  headScripts: [
    {
      content: `
(function() {
  var vueLink = '${VUE_DOCS}';
  function mount() {
    var search = document.querySelector('.dumi-default-header-search')
      || document.querySelector('[class*="header-search"]')
      || document.querySelector('input[placeholder*="搜索"]')?.parentElement;

    if (!search || !search.parentElement) return false;
    if (document.getElementById('dumi-vue-doc-link')) return true;

    var a = document.createElement('a');
    a.id = 'dumi-vue-doc-link';
    a.href = vueLink;
    a.textContent = 'Vue 文档';
    a.style.marginLeft = '10px';
    a.style.padding = '4px 10px';
    a.style.border = '1px solid #d9d9d9';
    a.style.borderRadius = '6px';
    a.style.fontSize = '12px';
    a.style.textDecoration = 'none';
    a.style.color = 'inherit';
    a.style.whiteSpace = 'nowrap';

    search.parentElement.appendChild(a);
    return true;
  }

  if (!mount()) {
    var timer = setInterval(function() {
      if (mount()) clearInterval(timer);
    }, 500);
    setTimeout(function() { clearInterval(timer); }, 10000);
  }
})();
      `,
    },
  ],
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
