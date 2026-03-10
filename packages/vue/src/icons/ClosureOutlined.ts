// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ClosureOutlinedSvg from '@colelab/icons-svg/es/asn/ClosureOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ClosureOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ClosureOutlinedSvg }, slots);
  },
});
