// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireExitsFilledSvg from '@colelab/icons-svg/es/asn/FireExitsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireExitsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireExitsFilledSvg }, slots);
  },
});
