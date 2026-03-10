// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeatDownOutlinedSvg from '@colelab/icons-svg/es/asn/HeatDownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeatDownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeatDownOutlinedSvg }, slots);
  },
});
