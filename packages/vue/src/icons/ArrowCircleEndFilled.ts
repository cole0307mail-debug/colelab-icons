// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCircleEndFilledSvg from '@colelab/icons-svg/es/asn/ArrowCircleEndFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCircleEndFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCircleEndFilledSvg }, slots);
  },
});
