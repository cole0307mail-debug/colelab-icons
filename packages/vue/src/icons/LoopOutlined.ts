// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LoopOutlinedSvg from '@colelab/icons-svg/es/asn/LoopOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LoopOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LoopOutlinedSvg }, slots);
  },
});
