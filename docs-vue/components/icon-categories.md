---
layout: doc
outline: false
aside: false
sidebar: false
---

# 图标分类浏览

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import * as Icons from '@colelab/icons-vue';

type IconEntry = [string, any];
const query = ref('');
const copied = ref('');
const style = ref<'outlined' | 'filled' | 'twotone' | 'purely'>('outlined');
const currentSection = ref('人员&用户');

const SCENARIOS = [
  { key: 'person', title: '人员&用户', keywords: ['User', 'Users', 'Account', 'Role', 'Tenant', 'Organization', 'Personnel'] },
  { key: 'device', title: '设备类图标', keywords: ['Camera', 'Device', 'Sensor', 'Host', 'Hydrant', 'Pole', 'Elevator', 'Smoke', 'Gas', 'Fire'] },
  { key: 'op', title: '设备状态&操作', keywords: ['Tool', 'Setting', 'Control', 'Operate', 'Status', 'Warning', 'Info', 'Check', 'Close', 'Loading'] },
  { key: 'map', title: '地图&位置', keywords: ['Location', 'Compass', 'Map', 'Route', 'Road', 'Area'] },
] as const;

const entries = Object.entries(Icons)
  .filter(([name, comp]) => name !== 'default' && name !== 'SensoroIcon' && typeof comp === 'object')
  .sort((a, b) => a[0].localeCompare(b[0])) as IconEntry[];

const byStyle = computed(() => {
  if (style.value === 'outlined') return entries.filter(([n]) => n.endsWith('Outlined'));
  if (style.value === 'filled') return entries.filter(([n]) => n.endsWith('Filled'));
  if (style.value === 'twotone') return entries.filter(([n]) => n.endsWith('TwoTone'));
  return entries.filter(([n]) => n.endsWith('Purely'));
});

const bySearch = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return byStyle.value;
  return byStyle.value.filter(([name]) => name.toLowerCase().includes(q));
});

const grouped = computed(() => {
  const used = new Set<string>();
  const gs = SCENARIOS.map((r) => {
    const items = bySearch.value.filter(([n]) => r.keywords.some((k) => n.includes(k)));
    items.forEach(([n]) => used.add(n));
    return { key: r.key, title: r.title, items };
  }).filter((g) => g.items.length > 0);
  const others = bySearch.value.filter(([n]) => !used.has(n));
  if (others.length) gs.push({ key: 'others', title: '其他', items: others });
  return gs;
});

function importCode(name: string) {
  return `import { ${name} } from '@colelab/icons-vue';`;
}

async function copyImport(name: string) {
  await navigator.clipboard.writeText(importCode(name));
  copied.value = name;
  setTimeout(() => copied.value === name && (copied.value = ''), 900);
}

function handleScroll() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const offset = 120;
  let active = sections[0]?.dataset.section || '人员&用户';
  for (const sec of sections) {
    const top = sec.getBoundingClientRect().top;
    if (top - offset <= 0) active = sec.dataset.section || active;
    else break;
  }
  currentSection.value = active;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<div class="toolbar sticky">
  <button @click="style = 'outlined'" :class="['tab', style === 'outlined' && 'on']">线框风格</button>
  <button @click="style = 'filled'" :class="['tab', style === 'filled' && 'on']">实底风格</button>
  <button @click="style = 'twotone'" :class="['tab', style === 'twotone' && 'on']">双色风格</button>
  <button @click="style = 'purely'" :class="['tab', style === 'purely' && 'on']">图片风格</button>
  <span class="current">当前分类：{{ currentSection }}</span>
  <input v-model="query" placeholder="搜索图标名" class="search" />
</div>

<section v-for="group in grouped" :key="group.title" class="section" :data-section="group.title">
  <h2>{{ group.title }}</h2>
  <div class="grid">
    <button v-for="item in group.items" :key="item[0]" class="icon-item" :class="{ purely: style === 'purely' }" @click="copyImport(item[0])" :title="importCode(item[0])">
      <component :is="item[1]" class="icon" :class="{ purely: style === 'purely' }" />
      <div class="name">{{ item[0] }}</div>
      <div class="copy">{{ copied === item[0] ? '已复制' : '' }}</div>
    </button>
  </div>
</section>

<style scoped>
.toolbar { display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin:8px 0 18px }
.sticky { position: sticky; top: 56px; z-index: 30; background: var(--vp-c-bg); padding: 8px 0; border-bottom: 1px solid var(--vp-c-divider); }
.tab { border:1px solid var(--vp-c-divider); background:var(--vp-c-bg); padding:4px 10px; border-radius:6px; font-size:12px }
.tab.on { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1) }
.current { font-size:12px; color: var(--vp-c-text-2); margin-left: 4px; }
.search { height:30px; border:1px solid var(--vp-c-divider); border-radius:6px; padding:0 10px; min-width:220px; margin-left: auto; }
.section { margin-bottom:24px }
.grid { display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); gap:12px }
.icon-item { background:transparent; border:none; text-align:center; cursor:pointer; padding:6px 2px }
.icon { font-size:22px }
.icon.purely { font-size:48px }
.name { font-size:11px; margin-top:6px; line-height:1.2; word-break:break-all }
.icon-item.purely .name { font-size:10px; }
.copy { font-size:10px; color:var(--vp-c-brand-1); min-height:12px; margin-top:2px }
</style>
