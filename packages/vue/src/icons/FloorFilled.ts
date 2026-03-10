// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FloorFilledSvg from '@colelab/icons-svg/es/asn/FloorFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FloorFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FloorFilledSvg }, slots);
  },
});
