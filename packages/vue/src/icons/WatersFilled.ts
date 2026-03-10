// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import WatersFilledSvg from '@colelab/icons-svg/es/asn/WatersFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'WatersFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: WatersFilledSvg }, slots);
  },
});
