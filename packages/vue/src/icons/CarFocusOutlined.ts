// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CarFocusOutlinedSvg from '@colelab/icons-svg/es/asn/CarFocusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CarFocusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CarFocusOutlinedSvg }, slots);
  },
});
