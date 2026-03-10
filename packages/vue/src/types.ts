import type { Component, CSSProperties, PropType } from 'vue';
import type { IconDefinition } from '@colelab/icons-svg/es/types';

export type TwoToneColor = string | [string, string];

export interface SensoroIconProps {
  icon: IconDefinition;
  spin?: boolean;
  rotate?: number;
  class?: string;
  style?: CSSProperties;
  twoToneColor?: TwoToneColor;
}

export type SensoroIconComponent = Component & {
  __props?: SensoroIconProps;
};

export const iconDefinitionProp = Object as PropType<IconDefinition>;
