// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ParkingLotOutlinedSvg from '@colelab/icons-svg/es/asn/ParkingLotOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ParkingLotOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ParkingLotOutlinedSvg }, slots);
  },
});
