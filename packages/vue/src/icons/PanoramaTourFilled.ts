// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PanoramaTourFilledSvg from '@colelab/icons-svg/es/asn/PanoramaTourFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PanoramaTourFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PanoramaTourFilledSvg }, slots);
  },
});
