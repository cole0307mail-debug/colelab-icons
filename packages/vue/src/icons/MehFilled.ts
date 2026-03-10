// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MehFilledSvg from '@colelab/icons-svg/es/asn/MehFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MehFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MehFilledSvg }, slots);
  },
});
