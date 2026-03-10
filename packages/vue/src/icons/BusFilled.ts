// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BusFilledSvg from '@colelab/icons-svg/es/asn/BusFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BusFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BusFilledSvg }, slots);
  },
});
