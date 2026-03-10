// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SignalTowerPurelySvg from '@colelab/icons-svg/es/asn/SignalTowerPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SignalTowerPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SignalTowerPurelySvg }, slots);
  },
});
