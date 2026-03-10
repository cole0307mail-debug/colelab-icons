import { existsSync } from 'node:fs';

const required = [
  'packages/core/es/index.js',
  'packages/react/es/index.js',
  'packages/vue/es/index.js',
  'packages/vue/src/components/SensoroIcon.ts',
  'docs-vue/components/icon-categories.md',
];

const missing = required.filter((p) => !existsSync(p));

if (missing.length) {
  console.error('❌ Smoke check failed. Missing files:');
  for (const m of missing) console.error(' -', m);
  process.exit(1);
}

console.log('✅ Smoke check passed. Key outputs/files exist.');
