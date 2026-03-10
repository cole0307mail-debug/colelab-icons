// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MiniatureFireStationFilledSvg from '@colelab/icons-svg/es/asn/MiniatureFireStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MiniatureFireStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MiniatureFireStationFilledSvg }, slots);
  },
});
