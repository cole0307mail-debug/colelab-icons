// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarParkOutlinedSvg from '@colelab/icons-svg/es/asn/CarParkOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarParkOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarParkOutlinedSvg }, slots);
  },
});
