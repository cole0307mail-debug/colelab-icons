// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendArrowThickOutlinedSvg from '@colelab/icons-svg/es/asn/LegendArrowThickOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendArrowThickOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendArrowThickOutlinedSvg }, slots);
  },
});
