// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VentilationFanOutlinedSvg from '@colelab/icons-svg/es/asn/VentilationFanOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VentilationFanOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VentilationFanOutlinedSvg }, slots);
  },
});
