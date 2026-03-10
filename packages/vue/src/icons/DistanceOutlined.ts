// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DistanceOutlinedSvg from '@colelab/icons-svg/es/asn/DistanceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DistanceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DistanceOutlinedSvg }, slots);
  },
});
