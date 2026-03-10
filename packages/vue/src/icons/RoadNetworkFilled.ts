// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RoadNetworkFilledSvg from '@colelab/icons-svg/es/asn/RoadNetworkFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RoadNetworkFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RoadNetworkFilledSvg }, slots);
  },
});
