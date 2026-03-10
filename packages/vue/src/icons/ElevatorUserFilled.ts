// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElevatorUserFilledSvg from '@colelab/icons-svg/es/asn/ElevatorUserFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElevatorUserFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElevatorUserFilledSvg }, slots);
  },
});
