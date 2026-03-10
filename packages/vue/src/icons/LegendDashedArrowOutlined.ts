// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendDashedArrowOutlinedSvg from '@colelab/icons-svg/es/asn/LegendDashedArrowOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendDashedArrowOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendDashedArrowOutlinedSvg }, slots);
  },
});
