// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RiverFilledSvg from '@colelab/icons-svg/es/asn/RiverFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RiverFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RiverFilledSvg }, slots);
  },
});
