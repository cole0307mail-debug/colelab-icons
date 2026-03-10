// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowSquareEndFilledSvg from '@colelab/icons-svg/es/asn/ArrowSquareEndFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowSquareEndFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowSquareEndFilledSvg }, slots);
  },
});
