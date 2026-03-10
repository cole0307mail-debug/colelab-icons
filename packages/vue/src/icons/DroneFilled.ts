// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DroneFilledSvg from '@colelab/icons-svg/es/asn/DroneFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DroneFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DroneFilledSvg }, slots);
  },
});
