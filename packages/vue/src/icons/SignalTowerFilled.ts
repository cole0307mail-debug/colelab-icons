// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SignalTowerFilledSvg from '@colelab/icons-svg/es/asn/SignalTowerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SignalTowerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SignalTowerFilledSvg }, slots);
  },
});
