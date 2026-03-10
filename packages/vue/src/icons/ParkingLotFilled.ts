// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ParkingLotFilledSvg from '@colelab/icons-svg/es/asn/ParkingLotFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ParkingLotFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ParkingLotFilledSvg }, slots);
  },
});
