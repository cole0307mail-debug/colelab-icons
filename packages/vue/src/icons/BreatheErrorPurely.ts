// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BreatheErrorPurelySvg from '@colelab/icons-svg/es/asn/BreatheErrorPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BreatheErrorPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BreatheErrorPurelySvg }, slots);
  },
});
