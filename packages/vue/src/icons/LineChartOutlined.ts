// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LineChartOutlinedSvg from '@colelab/icons-svg/es/asn/LineChartOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LineChartOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LineChartOutlinedSvg }, slots);
  },
});
