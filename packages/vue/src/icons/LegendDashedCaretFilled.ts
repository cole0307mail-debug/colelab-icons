// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendDashedCaretFilledSvg from '@colelab/icons-svg/es/asn/LegendDashedCaretFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendDashedCaretFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendDashedCaretFilledSvg }, slots);
  },
});
