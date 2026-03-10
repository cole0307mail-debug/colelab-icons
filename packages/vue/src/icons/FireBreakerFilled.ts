// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireBreakerFilledSvg from '@colelab/icons-svg/es/asn/FireBreakerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireBreakerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireBreakerFilledSvg }, slots);
  },
});
