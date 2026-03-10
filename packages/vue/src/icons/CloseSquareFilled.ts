// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CloseSquareFilledSvg from '@colelab/icons-svg/es/asn/CloseSquareFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CloseSquareFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CloseSquareFilledSvg }, slots);
  },
});
