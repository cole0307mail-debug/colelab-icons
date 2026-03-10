// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarOutlinedSvg from '@colelab/icons-svg/es/asn/CarOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarOutlinedSvg }, slots);
  },
});
