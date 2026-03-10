// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyRopeOutlinedSvg from '@colelab/icons-svg/es/asn/SafetyRopeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyRopeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyRopeOutlinedSvg }, slots);
  },
});
