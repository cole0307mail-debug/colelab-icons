// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoonPurelySvg from '@colelab/icons-svg/es/asn/MoonPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoonPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoonPurelySvg }, slots);
  },
});
