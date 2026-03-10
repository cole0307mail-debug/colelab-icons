// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SpecialVehiclesPurelySvg from '@colelab/icons-svg/es/asn/SpecialVehiclesPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SpecialVehiclesPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SpecialVehiclesPurelySvg }, slots);
  },
});
