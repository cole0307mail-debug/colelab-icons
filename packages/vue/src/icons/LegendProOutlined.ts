// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendProOutlinedSvg from '@colelab/icons-svg/es/asn/LegendProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendProOutlinedSvg }, slots);
  },
});
