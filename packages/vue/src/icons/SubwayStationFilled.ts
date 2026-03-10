// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SubwayStationFilledSvg from '@colelab/icons-svg/es/asn/SubwayStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SubwayStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SubwayStationFilledSvg }, slots);
  },
});
