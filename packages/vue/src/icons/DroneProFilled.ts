// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroneProFilledSvg from '@colelab/icons-svg/es/asn/DroneProFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroneProFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroneProFilledSvg }, slots);
  },
});
