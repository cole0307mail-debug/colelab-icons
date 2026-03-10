// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarSpecialFilledSvg from '@colelab/icons-svg/es/asn/CarSpecialFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarSpecialFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarSpecialFilledSvg }, slots);
  },
});
