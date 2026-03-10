// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LandingOutlinedSvg from '@colelab/icons-svg/es/asn/LandingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LandingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LandingOutlinedSvg }, slots);
  },
});
