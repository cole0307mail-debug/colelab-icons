// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetySearchFilledSvg from '@colelab/icons-svg/es/asn/SafetySearchFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetySearchFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetySearchFilledSvg }, slots);
  },
});
