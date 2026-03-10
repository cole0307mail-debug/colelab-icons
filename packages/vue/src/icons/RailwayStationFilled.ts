// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RailwayStationFilledSvg from '@colelab/icons-svg/es/asn/RailwayStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RailwayStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RailwayStationFilledSvg }, slots);
  },
});
