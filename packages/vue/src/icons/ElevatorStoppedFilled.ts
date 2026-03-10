// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElevatorStoppedFilledSvg from '@colelab/icons-svg/es/asn/ElevatorStoppedFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElevatorStoppedFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElevatorStoppedFilledSvg }, slots);
  },
});
