// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCaretLeftFilledSvg from '@colelab/icons-svg/es/asn/ArrowCaretLeftFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCaretLeftFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCaretLeftFilledSvg }, slots);
  },
});
