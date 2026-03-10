// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendCaretFilledSvg from '@colelab/icons-svg/es/asn/LegendCaretFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendCaretFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendCaretFilledSvg }, slots);
  },
});
