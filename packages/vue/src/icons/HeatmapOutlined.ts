// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeatmapOutlinedSvg from '@colelab/icons-svg/es/asn/HeatmapOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeatmapOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeatmapOutlinedSvg }, slots);
  },
});
