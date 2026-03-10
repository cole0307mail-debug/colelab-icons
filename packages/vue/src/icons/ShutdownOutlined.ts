// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShutdownOutlinedSvg from '@colelab/icons-svg/es/asn/ShutdownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShutdownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShutdownOutlinedSvg }, slots);
  },
});
