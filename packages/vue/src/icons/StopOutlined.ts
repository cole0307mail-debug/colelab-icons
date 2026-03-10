// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StopOutlinedSvg from '@colelab/icons-svg/es/asn/StopOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StopOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StopOutlinedSvg }, slots);
  },
});
