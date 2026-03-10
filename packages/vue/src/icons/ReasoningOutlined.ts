// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ReasoningOutlinedSvg from '@colelab/icons-svg/es/asn/ReasoningOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ReasoningOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ReasoningOutlinedSvg }, slots);
  },
});
