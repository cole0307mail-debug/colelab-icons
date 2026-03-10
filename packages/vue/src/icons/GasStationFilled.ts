// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasStationFilledSvg from '@colelab/icons-svg/es/asn/GasStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasStationFilledSvg }, slots);
  },
});
