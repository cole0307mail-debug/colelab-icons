// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MiniatureFireStationOutlinedSvg from '@colelab/icons-svg/es/asn/MiniatureFireStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MiniatureFireStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MiniatureFireStationOutlinedSvg }, slots);
  },
});
