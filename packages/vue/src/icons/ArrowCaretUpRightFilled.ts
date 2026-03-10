// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCaretUpRightFilledSvg from '@colelab/icons-svg/es/asn/ArrowCaretUpRightFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCaretUpRightFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCaretUpRightFilledSvg }, slots);
  },
});
