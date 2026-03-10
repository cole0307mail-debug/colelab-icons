// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Nh3OutlinedSvg from '@colelab/icons-svg/es/asn/Nh3Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Nh3Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Nh3OutlinedSvg }, slots);
  },
});
