// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EyeOutlinedSvg from '@colelab/icons-svg/es/asn/EyeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EyeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EyeOutlinedSvg }, slots);
  },
});
