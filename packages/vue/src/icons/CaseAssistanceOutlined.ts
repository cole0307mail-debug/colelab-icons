// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CaseAssistanceOutlinedSvg from '@colelab/icons-svg/es/asn/CaseAssistanceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CaseAssistanceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CaseAssistanceOutlinedSvg }, slots);
  },
});
