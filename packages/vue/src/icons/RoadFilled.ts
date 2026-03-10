// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RoadFilledSvg from '@colelab/icons-svg/es/asn/RoadFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RoadFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RoadFilledSvg }, slots);
  },
});
