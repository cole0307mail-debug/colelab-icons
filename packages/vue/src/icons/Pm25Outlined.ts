// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Pm25OutlinedSvg from '@colelab/icons-svg/es/asn/Pm25Outlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Pm25Outlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Pm25OutlinedSvg }, slots);
  },
});
