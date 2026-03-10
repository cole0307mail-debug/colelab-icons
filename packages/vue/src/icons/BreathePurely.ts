// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BreathePurelySvg from '@colelab/icons-svg/es/asn/BreathePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BreathePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BreathePurelySvg }, slots);
  },
});
