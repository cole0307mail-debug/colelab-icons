// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendLineBoldFilledSvg from '@colelab/icons-svg/es/asn/LegendLineBoldFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendLineBoldFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendLineBoldFilledSvg }, slots);
  },
});
