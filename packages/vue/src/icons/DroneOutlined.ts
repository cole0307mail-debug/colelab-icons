// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroneOutlinedSvg from '@colelab/icons-svg/es/asn/DroneOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroneOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroneOutlinedSvg }, slots);
  },
});
