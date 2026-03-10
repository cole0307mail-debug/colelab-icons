import { defineComponent, computed } from 'vue';
import type { PropType } from 'vue';
import type { IconDefinition } from '@colelab/icons-svg/es/types';
import { generate, getSecondaryColor, isIconDefinition, svgBaseProps } from '../utils';

const twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false,
};

function setTwoToneColors({ primaryColor, secondaryColor }: { primaryColor: string; secondaryColor?: string }) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return { ...twoToneColorPalette };
}

const IconBase = defineComponent({
  name: 'SensoroIconBase',
  props: {
    icon: { type: Object as PropType<IconDefinition>, required: true },
    primaryColor: String,
    secondaryColor: String,
    style: Object as PropType<Record<string, any>>,
    class: [String, Array, Object] as PropType<any>,
  },
  setup(props) {
    const colors = computed(() => {
      if (props.primaryColor) {
        return {
          primaryColor: props.primaryColor,
          secondaryColor: props.secondaryColor || getSecondaryColor(props.primaryColor),
        };
      }
      return twoToneColorPalette;
    });

    return () => {
      if (!isIconDefinition(props.icon)) return null;

      let target = props.icon;
      if (typeof target.icon === 'function') {
        target = {
          ...target,
          icon: target.icon(colors.value.primaryColor, colors.value.secondaryColor),
        } as IconDefinition;
      }

      return generate(target.icon as any, `svg-${target.name}`, {
        ...svgBaseProps,
        class: props.class,
        style: props.style,
        'data-icon': target.name,
      });
    };
  },
}) as any;

IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

export default IconBase;
