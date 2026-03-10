// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PieChartOutlinedSvg from '@colelab/icons-svg/es/asn/PieChartOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PieChartOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PieChartOutlinedSvg }, slots);
  },
});
