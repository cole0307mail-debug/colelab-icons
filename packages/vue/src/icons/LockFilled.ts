// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LockFilledSvg from '@colelab/icons-svg/es/asn/LockFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LockFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LockFilledSvg }, slots);
  },
});
