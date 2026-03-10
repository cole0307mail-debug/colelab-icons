// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SubwayStationOutlinedSvg from '@colelab/icons-svg/es/asn/SubwayStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SubwayStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SubwayStationOutlinedSvg }, slots);
  },
});
