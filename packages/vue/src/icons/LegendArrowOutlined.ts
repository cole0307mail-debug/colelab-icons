// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendArrowOutlinedSvg from '@colelab/icons-svg/es/asn/LegendArrowOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendArrowOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendArrowOutlinedSvg }, slots);
  },
});
