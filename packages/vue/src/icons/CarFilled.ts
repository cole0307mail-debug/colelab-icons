// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarFilledSvg from '@colelab/icons-svg/es/asn/CarFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarFilledSvg }, slots);
  },
});
