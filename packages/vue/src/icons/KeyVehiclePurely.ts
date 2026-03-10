// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import KeyVehiclePurelySvg from '@colelab/icons-svg/es/asn/KeyVehiclePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'KeyVehiclePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: KeyVehiclePurelySvg }, slots);
  },
});
