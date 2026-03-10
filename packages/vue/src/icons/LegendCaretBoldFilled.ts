// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendCaretBoldFilledSvg from '@colelab/icons-svg/es/asn/LegendCaretBoldFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendCaretBoldFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendCaretBoldFilledSvg }, slots);
  },
});
