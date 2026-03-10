// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CaretRightFilledSvg from '@colelab/icons-svg/es/asn/CaretRightFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CaretRightFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CaretRightFilledSvg }, slots);
  },
});
