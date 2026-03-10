// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BusStopOutlinedSvg from '@colelab/icons-svg/es/asn/BusStopOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BusStopOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BusStopOutlinedSvg }, slots);
  },
});
