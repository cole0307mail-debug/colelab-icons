// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasStationOutlinedSvg from '@colelab/icons-svg/es/asn/GasStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasStationOutlinedSvg }, slots);
  },
});
