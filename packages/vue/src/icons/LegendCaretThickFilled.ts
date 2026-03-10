// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendCaretThickFilledSvg from '@colelab/icons-svg/es/asn/LegendCaretThickFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendCaretThickFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendCaretThickFilledSvg }, slots);
  },
});
