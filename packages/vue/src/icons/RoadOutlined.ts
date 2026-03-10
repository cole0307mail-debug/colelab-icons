// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RoadOutlinedSvg from '@colelab/icons-svg/es/asn/RoadOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RoadOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RoadOutlinedSvg }, slots);
  },
});
