// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FiremenFilledSvg from '@colelab/icons-svg/es/asn/FiremenFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FiremenFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FiremenFilledSvg }, slots);
  },
});
