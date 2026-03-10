// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetySearchOutlinedSvg from '@colelab/icons-svg/es/asn/SafetySearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetySearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetySearchOutlinedSvg }, slots);
  },
});
