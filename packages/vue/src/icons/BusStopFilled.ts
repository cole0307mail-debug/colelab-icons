// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BusStopFilledSvg from '@colelab/icons-svg/es/asn/BusStopFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BusStopFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BusStopFilledSvg }, slots);
  },
});
