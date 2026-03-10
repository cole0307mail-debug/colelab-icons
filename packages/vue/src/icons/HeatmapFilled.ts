// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeatmapFilledSvg from '@colelab/icons-svg/es/asn/HeatmapFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeatmapFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeatmapFilledSvg }, slots);
  },
});
