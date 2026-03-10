// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeartOutlinedSvg from '@colelab/icons-svg/es/asn/HeartOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeartOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeartOutlinedSvg }, slots);
  },
});
