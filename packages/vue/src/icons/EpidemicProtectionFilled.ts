// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EpidemicProtectionFilledSvg from '@colelab/icons-svg/es/asn/EpidemicProtectionFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EpidemicProtectionFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EpidemicProtectionFilledSvg }, slots);
  },
});
