// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendArrowBoldOutlinedSvg from '@colelab/icons-svg/es/asn/LegendArrowBoldOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendArrowBoldOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendArrowBoldOutlinedSvg }, slots);
  },
});
