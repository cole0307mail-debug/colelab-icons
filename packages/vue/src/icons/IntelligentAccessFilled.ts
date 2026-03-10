// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IntelligentAccessFilledSvg from '@colelab/icons-svg/es/asn/IntelligentAccessFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IntelligentAccessFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IntelligentAccessFilledSvg }, slots);
  },
});
