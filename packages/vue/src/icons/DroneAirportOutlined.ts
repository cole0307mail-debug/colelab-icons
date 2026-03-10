// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroneAirportOutlinedSvg from '@colelab/icons-svg/es/asn/DroneAirportOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroneAirportOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroneAirportOutlinedSvg }, slots);
  },
});
