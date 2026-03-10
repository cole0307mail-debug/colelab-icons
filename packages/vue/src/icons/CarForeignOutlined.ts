// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarForeignOutlinedSvg from '@colelab/icons-svg/es/asn/CarForeignOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarForeignOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarForeignOutlinedSvg }, slots);
  },
});
