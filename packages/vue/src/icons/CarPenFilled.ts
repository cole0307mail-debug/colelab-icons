// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarPenFilledSvg from '@colelab/icons-svg/es/asn/CarPenFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarPenFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarPenFilledSvg }, slots);
  },
});
