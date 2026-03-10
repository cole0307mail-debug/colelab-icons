// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCircleStartFilledSvg from '@colelab/icons-svg/es/asn/ArrowCircleStartFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCircleStartFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCircleStartFilledSvg }, slots);
  },
});
