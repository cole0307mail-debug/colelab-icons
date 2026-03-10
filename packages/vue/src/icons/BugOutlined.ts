// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BugOutlinedSvg from '@colelab/icons-svg/es/asn/BugOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BugOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BugOutlinedSvg }, slots);
  },
});
