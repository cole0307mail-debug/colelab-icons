// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendLineThickFilledSvg from '@colelab/icons-svg/es/asn/LegendLineThickFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendLineThickFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendLineThickFilledSvg }, slots);
  },
});
