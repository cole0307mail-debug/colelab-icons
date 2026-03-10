// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmokePurelySvg from '@colelab/icons-svg/es/asn/SmokePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmokePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmokePurelySvg }, slots);
  },
});
