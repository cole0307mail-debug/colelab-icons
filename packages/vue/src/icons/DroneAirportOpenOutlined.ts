// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroneAirportOpenOutlinedSvg from '@colelab/icons-svg/es/asn/DroneAirportOpenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroneAirportOpenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroneAirportOpenOutlinedSvg }, slots);
  },
});
