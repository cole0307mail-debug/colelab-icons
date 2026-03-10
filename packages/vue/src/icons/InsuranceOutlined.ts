// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import InsuranceOutlinedSvg from '@colelab/icons-svg/es/asn/InsuranceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'InsuranceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: InsuranceOutlinedSvg }, slots);
  },
});
