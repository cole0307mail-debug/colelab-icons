import { defineComponent, h } from 'vue';
import type { PropType } from 'vue';
import type { IconDefinition } from '@colelab/icons-svg/es/types';
import IconBase from './IconBase';
import { normalizeTwoToneColors } from '../utils';

export type TwoToneColor = string | [string, string];

const SensoroIcon = defineComponent({
  name: 'SensoroIcon',
  props: {
    icon: { type: Object as PropType<IconDefinition>, required: true },
    spin: Boolean,
    rotate: Number,
    twoToneColor: [String, Array] as PropType<TwoToneColor>,
    class: [String, Array, Object] as PropType<any>,
    style: Object as PropType<Record<string, any>>,
  },
  setup(props, { attrs }) {
    return () => {
      const cls = [
        's-icon',
        'anticon',
        `s-icon-${props.icon.name}`,
        { 's-icon-spin': props.spin || props.icon.name === 'loading' },
        props.class,
      ];
      const svgStyle = props.rotate
        ? {
            msTransform: `rotate(${props.rotate}deg)`,
            transform: `rotate(${props.rotate}deg)`,
          }
        : undefined;

      const [primaryColor, secondaryColor] = normalizeTwoToneColors(props.twoToneColor as any);

      return h(
        'span',
        {
          role: 'img',
          'aria-label': props.icon.name,
          class: cls,
          ...attrs,
        },
        [h(IconBase as any, { icon: props.icon, primaryColor, secondaryColor, style: svgStyle })],
      );
    };
  },
});

export default SensoroIcon;
