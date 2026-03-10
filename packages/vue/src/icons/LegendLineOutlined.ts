// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LegendLineOutlinedSvg from '@colelab/icons-svg/es/asn/LegendLineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LegendLineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LegendLineOutlinedSvg }, slots);
  },
});
