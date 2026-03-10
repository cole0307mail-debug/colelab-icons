// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Ch4OutlinedSvg from '@colelab/icons-svg/es/asn/Ch4Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Ch4Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Ch4OutlinedSvg }, slots);
  },
});
