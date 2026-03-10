// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireFilledSvg from '@colelab/icons-svg/es/asn/FireFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireFilledSvg }, slots);
  },
});
