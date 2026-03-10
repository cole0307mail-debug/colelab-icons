// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyFireFilledSvg from '@colelab/icons-svg/es/asn/SafetyFireFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyFireFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyFireFilledSvg }, slots);
  },
});
