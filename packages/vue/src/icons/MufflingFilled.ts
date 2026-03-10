// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MufflingFilledSvg from '@colelab/icons-svg/es/asn/MufflingFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MufflingFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MufflingFilledSvg }, slots);
  },
});
