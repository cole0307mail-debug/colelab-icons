import { h } from 'vue';
import type { VNode } from 'vue';
import { generate as generateColor } from '@ant-design/colors';
import type { AbstractNode, IconDefinition } from '@colelab/icons-svg/es/types';

export interface Attrs {
  [key: string]: string;
}

/**
 * Vue SVG attrs should keep kebab-case / namespaced attrs as-is.
 * Unlike React, converting to camelCase may break attributes such as
 * fill-rule, clip-path, stop-color, xlink:href, etc.
 */
export function normalizeAttrs(attrs: Attrs = {}): Record<string, any> {
  return Object.keys(attrs).reduce((acc: Record<string, any>, key: string) => {
    const val = attrs[key];
    if (key === 'class') {
      acc.class = val;
    } else {
      acc[key] = val;
    }
    return acc;
  }, {});
}

export function generate(node: AbstractNode, key: string, rootProps?: Record<string, any> | false): VNode {
  const props = {
    key,
    ...normalizeAttrs(node.attrs),
    ...(rootProps || {}),
  };

  return h(
    node.tag,
    props,
    (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`)),
  );
}

export function isIconDefinition(target: any): target is IconDefinition {
  return (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  );
}

export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
};

export function getSecondaryColor(primaryColor: string): string {
  return generateColor(primaryColor)[0];
}

export function normalizeTwoToneColors(twoToneColor?: string | [string, string]): string[] {
  if (!twoToneColor) return [];
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
