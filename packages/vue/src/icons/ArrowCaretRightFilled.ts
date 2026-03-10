// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCaretRightFilledSvg from '@colelab/icons-svg/es/asn/ArrowCaretRightFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCaretRightFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCaretRightFilledSvg }, slots);
  },
});
