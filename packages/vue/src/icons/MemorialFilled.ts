// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MemorialFilledSvg from '@colelab/icons-svg/es/asn/MemorialFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MemorialFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MemorialFilledSvg }, slots);
  },
});
