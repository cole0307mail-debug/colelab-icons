// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AircircuitBreakerFilledSvg from '@colelab/icons-svg/es/asn/AircircuitBreakerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AircircuitBreakerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AircircuitBreakerFilledSvg }, slots);
  },
});
