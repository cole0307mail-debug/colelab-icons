// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ColorFilterOutlinedSvg from '@colelab/icons-svg/es/asn/ColorFilterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ColorFilterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ColorFilterOutlinedSvg }, slots);
  },
});
