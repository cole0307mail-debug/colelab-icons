// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VehicleFileOutlinedSvg from '@colelab/icons-svg/es/asn/VehicleFileOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VehicleFileOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VehicleFileOutlinedSvg }, slots);
  },
});
