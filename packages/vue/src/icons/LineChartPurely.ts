// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LineChartPurelySvg from '@colelab/icons-svg/es/asn/LineChartPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LineChartPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LineChartPurelySvg }, slots);
  },
});
