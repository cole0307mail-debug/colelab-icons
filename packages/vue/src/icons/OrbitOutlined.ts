// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrbitOutlinedSvg from '@colelab/icons-svg/es/asn/OrbitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrbitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrbitOutlinedSvg }, slots);
  },
});
