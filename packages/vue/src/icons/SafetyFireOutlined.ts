// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyFireOutlinedSvg from '@colelab/icons-svg/es/asn/SafetyFireOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyFireOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyFireOutlinedSvg }, slots);
  },
});
