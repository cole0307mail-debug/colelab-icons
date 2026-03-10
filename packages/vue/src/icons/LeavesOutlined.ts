// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeavesOutlinedSvg from '@colelab/icons-svg/es/asn/LeavesOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeavesOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeavesOutlinedSvg }, slots);
  },
});
