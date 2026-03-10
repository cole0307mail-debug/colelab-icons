// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarParkFilledSvg from '@colelab/icons-svg/es/asn/CarParkFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarParkFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarParkFilledSvg }, slots);
  },
});
