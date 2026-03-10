// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrbitalFlightOutlinedSvg from '@colelab/icons-svg/es/asn/OrbitalFlightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrbitalFlightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrbitalFlightOutlinedSvg }, slots);
  },
});
