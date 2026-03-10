// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BellFilledSvg from '@colelab/icons-svg/es/asn/BellFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BellFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BellFilledSvg }, slots);
  },
});
