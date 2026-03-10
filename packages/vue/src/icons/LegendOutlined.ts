// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendOutlinedSvg from '@colelab/icons-svg/es/asn/LegendOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendOutlinedSvg }, slots);
  },
});
