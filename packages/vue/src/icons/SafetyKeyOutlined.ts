// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SafetyKeyOutlinedSvg from '@colelab/icons-svg/es/asn/SafetyKeyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SafetyKeyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SafetyKeyOutlinedSvg }, slots);
  },
});
