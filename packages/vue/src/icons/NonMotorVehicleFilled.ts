// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NonMotorVehicleFilledSvg from '@colelab/icons-svg/es/asn/NonMotorVehicleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NonMotorVehicleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NonMotorVehicleFilledSvg }, slots);
  },
});
