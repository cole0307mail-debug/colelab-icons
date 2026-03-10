// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DashOutlinedSvg from '@colelab/icons-svg/es/asn/DashOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DashOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DashOutlinedSvg }, slots);
  },
});
