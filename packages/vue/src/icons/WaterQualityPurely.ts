// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WaterQualityPurelySvg from '@colelab/icons-svg/es/asn/WaterQualityPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WaterQualityPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WaterQualityPurelySvg }, slots);
  },
});
