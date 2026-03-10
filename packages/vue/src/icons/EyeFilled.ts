// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EyeFilledSvg from '@colelab/icons-svg/es/asn/EyeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EyeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EyeFilledSvg }, slots);
  },
});
