// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EyeInvisibleFilledSvg from '@colelab/icons-svg/es/asn/EyeInvisibleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EyeInvisibleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EyeInvisibleFilledSvg }, slots);
  },
});
