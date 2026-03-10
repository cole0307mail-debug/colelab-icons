// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DockOutlinedSvg from '@colelab/icons-svg/es/asn/DockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DockOutlinedSvg }, slots);
  },
});
