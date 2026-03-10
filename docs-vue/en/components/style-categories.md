# Icon Categories (Vue)

> Aligned with React docs UX: business categories + search + click-to-copy import.

<script setup lang="ts">
import { computed, ref } from 'vue';
import * as Icons from '@colelab/icons-vue';

type IconEntry = [string, any];

const query = ref('');
const copied = ref('');

const entries = Object.entries(Icons)
  .filter(([name, comp]) => name !== 'default' && name !== 'SensoroIcon' && typeof comp === 'object')
  .sort((a, b) => a[0].localeCompare(b[0])) as IconEntry[];

const CATEGORY_RULES: Array<{ key: string; title: string; keywords: string[] }> = [
  { key: 'direction', title: 'Direction & Navigation', keywords: ['Arrow', 'Caret', 'Left', 'Right', 'Up', 'Down', 'Turn', 'Swap', 'Forward', 'Backward'] },
  { key: 'tip', title: 'Status & Feedback', keywords: ['Info', 'Warning', 'Danger', 'Check', 'Close', 'Question', 'Exclamation', 'Loading'] },
  { key: 'edit', title: 'Edit & Action', keywords: ['Edit', 'Delete', 'Copy', 'Scissor', 'Pen', 'Save', 'Upload', 'Download'] },
  { key: 'user', title: 'User & Org', keywords: ['User', 'Users', 'Account', 'Role', 'Tenant', 'Organization'] },
  { key: 'device', title: 'Device & Monitoring', keywords: ['Camera', 'Device', 'Video', 'Monitor', 'Sensor', 'Audio'] },
  { key: 'file', title: 'File & Data', keywords: ['File', 'Folder', 'Database', 'Chart', 'Data', 'Qrcode'] },
];

function inKeywords(name: string, keywords: string[]) {
  return keywords.some((kw) => name.includes(kw));
}

const normalizedQuery = computed(() => query.value.trim().toLowerCase());

const filteredEntries = computed(() => {
  if (!normalizedQuery.value) return entries;
  return entries.filter(([name]) => name.toLowerCase().includes(normalizedQuery.value));
});

const grouped = computed(() => {
  const used = new Set<string>();
  const groups = CATEGORY_RULES.map((rule) => {
    const items = filteredEntries.value.filter(([name]) => inKeywords(name, rule.keywords));
    items.forEach(([name]) => used.add(name));
    return { key: rule.key, title: rule.title, items };
  }).filter((g) => g.items.length > 0);

  const others = filteredEntries.value.filter(([name]) => !used.has(name));
  if (others.length) groups.push({ key: 'others', title: 'Others', items: others });
  return groups;
});

function importCode(name: string) {
  return `import { ${name} } from '@colelab/icons-vue';`;
}

async function copyImport(name: string) {
  const text = importCode(name);
  try {
    await navigator.clipboard.writeText(text);
    copied.value = name;
    setTimeout(() => {
      if (copied.value === name) copied.value = '';
    }, 1200);
  } catch (e) {
    console.error(e);
  }
}

function sample<T>(arr: T[], size = 120) {
  return arr.slice(0, size);
}
</script>

<div style="display:flex;gap:12px;align-items:center;margin:12px 0 20px;">
  <input
    v-model="query"
    placeholder="Search icon name, e.g. Camera / Warning / User"
    style="width:320px;height:34px;border:1px solid var(--vp-c-divider);border-radius:8px;padding:0 12px;background:var(--vp-c-bg);color:var(--vp-c-text-1);"
  />
  <span style="font-size:12px;opacity:.75;">{{ filteredEntries.length }} matches</span>
</div>

<div v-for="group in grouped" :key="group.key" style="margin-bottom:28px;">
  <h2>{{ group.title }} ({{ group.items.length }})</h2>
  <div style="display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px;">
    <button
      v-for="item in sample(group.items)"
      :key="item[0]"
      @click="copyImport(item[0])"
      :title="`Click to copy: ${importCode(item[0])}`"
      style="text-align:center; padding:10px; border:1px solid var(--vp-c-divider); border-radius:8px; background:var(--vp-c-bg); cursor:pointer;"
    >
      <component :is="item[1]" style="font-size:22px;" />
      <div style="font-size:11px; margin-top:6px; word-break:break-all;">{{ item[0] }}</div>
      <div style="font-size:10px; margin-top:4px; color: var(--vp-c-brand-1); min-height:14px;">
        {{ copied === item[0] ? 'Import copied' : '' }}
      </div>
    </button>
  </div>
</div>

::: tip
- Clicking any icon card copies: `import { IconName } from '@colelab/icons-vue';`
- To keep performance stable, each group shows up to 120 items.
:::
