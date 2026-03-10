// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Co2OutlinedSvg from '@colelab/icons-svg/es/asn/Co2Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Co2Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Co2OutlinedSvg }, slots);
  },
});
