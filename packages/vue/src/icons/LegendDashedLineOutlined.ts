// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendDashedLineOutlinedSvg from '@colelab/icons-svg/es/asn/LegendDashedLineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendDashedLineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendDashedLineOutlinedSvg }, slots);
  },
});
