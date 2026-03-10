// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CaretUpFilledSvg from '@colelab/icons-svg/es/asn/CaretUpFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CaretUpFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CaretUpFilledSvg }, slots);
  },
});
