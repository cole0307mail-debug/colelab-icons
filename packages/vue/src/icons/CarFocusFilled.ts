// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarFocusFilledSvg from '@colelab/icons-svg/es/asn/CarFocusFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarFocusFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarFocusFilledSvg }, slots);
  },
});
