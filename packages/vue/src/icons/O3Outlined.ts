// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import O3OutlinedSvg from '@colelab/icons-svg/es/asn/O3Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'O3Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: O3OutlinedSvg }, slots);
  },
});
