// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PlusSquareFilledSvg from '@colelab/icons-svg/es/asn/PlusSquareFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PlusSquareFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PlusSquareFilledSvg }, slots);
  },
});
