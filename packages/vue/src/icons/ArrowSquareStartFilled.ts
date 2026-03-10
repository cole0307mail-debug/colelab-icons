// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowSquareStartFilledSvg from '@colelab/icons-svg/es/asn/ArrowSquareStartFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowSquareStartFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowSquareStartFilledSvg }, slots);
  },
});
