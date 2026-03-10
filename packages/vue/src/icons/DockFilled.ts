// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DockFilledSvg from '@colelab/icons-svg/es/asn/DockFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DockFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DockFilledSvg }, slots);
  },
});
