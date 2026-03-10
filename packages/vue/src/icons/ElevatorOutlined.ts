// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElevatorOutlinedSvg from '@colelab/icons-svg/es/asn/ElevatorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElevatorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElevatorOutlinedSvg }, slots);
  },
});
