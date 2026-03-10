// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FastForwardFilledSvg from '@colelab/icons-svg/es/asn/FastForwardFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FastForwardFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FastForwardFilledSvg }, slots);
  },
});
