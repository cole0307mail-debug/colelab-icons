// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AircircuitBreakerOutlinedSvg from '@colelab/icons-svg/es/asn/AircircuitBreakerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AircircuitBreakerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AircircuitBreakerOutlinedSvg }, slots);
  },
});
