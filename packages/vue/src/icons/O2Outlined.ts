// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import O2OutlinedSvg from '@colelab/icons-svg/es/asn/O2Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'O2Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: O2OutlinedSvg }, slots);
  },
});
