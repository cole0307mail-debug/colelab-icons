// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DashboardFilledSvg from '@colelab/icons-svg/es/asn/DashboardFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DashboardFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DashboardFilledSvg }, slots);
  },
});
