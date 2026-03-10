// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScatterPlotOutlinedSvg from '@colelab/icons-svg/es/asn/ScatterPlotOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScatterPlotOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScatterPlotOutlinedSvg }, slots);
  },
});
