// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElevatorPurelySvg from '@colelab/icons-svg/es/asn/ElevatorPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElevatorPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElevatorPurelySvg }, slots);
  },
});
