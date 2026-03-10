// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CaretLeftFilledSvg from '@colelab/icons-svg/es/asn/CaretLeftFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CaretLeftFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CaretLeftFilledSvg }, slots);
  },
});
