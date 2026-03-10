// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarPenOutlinedSvg from '@colelab/icons-svg/es/asn/CarPenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarPenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarPenOutlinedSvg }, slots);
  },
});
