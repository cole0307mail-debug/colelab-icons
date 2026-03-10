// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarForeignFilledSvg from '@colelab/icons-svg/es/asn/CarForeignFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarForeignFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarForeignFilledSvg }, slots);
  },
});
