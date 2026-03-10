// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CheckSquareFilledSvg from '@colelab/icons-svg/es/asn/CheckSquareFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CheckSquareFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CheckSquareFilledSvg }, slots);
  },
});
