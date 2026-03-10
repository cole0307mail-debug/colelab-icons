// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarStopFilledSvg from '@colelab/icons-svg/es/asn/CarStopFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarStopFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarStopFilledSvg }, slots);
  },
});
