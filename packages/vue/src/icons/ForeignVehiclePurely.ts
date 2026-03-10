// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ForeignVehiclePurelySvg from '@colelab/icons-svg/es/asn/ForeignVehiclePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ForeignVehiclePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ForeignVehiclePurelySvg }, slots);
  },
});
