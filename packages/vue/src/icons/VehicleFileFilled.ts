// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VehicleFileFilledSvg from '@colelab/icons-svg/es/asn/VehicleFileFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VehicleFileFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VehicleFileFilledSvg }, slots);
  },
});
