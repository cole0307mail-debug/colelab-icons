// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeartRatePurelySvg from '@colelab/icons-svg/es/asn/HeartRatePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeartRatePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeartRatePurelySvg }, slots);
  },
});
