// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SquareFilledSvg from '@colelab/icons-svg/es/asn/SquareFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SquareFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SquareFilledSvg }, slots);
  },
});
