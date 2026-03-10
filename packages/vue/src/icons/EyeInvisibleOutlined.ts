// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EyeInvisibleOutlinedSvg from '@colelab/icons-svg/es/asn/EyeInvisibleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EyeInvisibleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EyeInvisibleOutlinedSvg }, slots);
  },
});
