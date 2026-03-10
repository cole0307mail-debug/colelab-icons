// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MinusSquareFilledSvg from '@colelab/icons-svg/es/asn/MinusSquareFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MinusSquareFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MinusSquareFilledSvg }, slots);
  },
});
