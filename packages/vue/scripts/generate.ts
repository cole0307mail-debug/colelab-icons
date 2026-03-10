import path from 'node:path';
import { logger, fsExtra } from '@umijs/utils';
import { series } from 'gulp';
import * as allIconDefs from '@colelab/icons-svg';

import { generateIcons } from './tasks';
import { clean, generateEntry } from '../../core/scripts/tasks';

const ICON_DIR = path.join(__dirname, '../src/icons');

const iconTemplate = fsExtra.readFileSync(path.join(__dirname, '../templates/icon.ts.ejs'), 'utf8');

logger.info('start');

series(
  clean(['src/icons']),
  generateIcons({
    iconDir: ICON_DIR,
    iconDefs: allIconDefs,
    template: iconTemplate,
    mapToInterpolate: ({ name }) => ({
      svgIdentifier: name,
    }),
  }),
  generateEntry({
    entryName: 'index.ts',
    from: ['src/icons/*.ts'],
    toDir: 'src/icons',
    banner: '// This index.ts file is generated automatically.\n',
    template: `export { default as <%= identifier %> } from '<%= path %>';`,
    mapToInterpolate: ({ name: identifier }) => ({
      identifier,
      path: `./${identifier}`,
    }),
  }),
)(() => {
  logger.info('end');
});
