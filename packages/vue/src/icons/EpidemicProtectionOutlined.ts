// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EpidemicProtectionOutlinedSvg from '@colelab/icons-svg/es/asn/EpidemicProtectionOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EpidemicProtectionOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EpidemicProtectionOutlinedSvg }, slots);
  },
});
