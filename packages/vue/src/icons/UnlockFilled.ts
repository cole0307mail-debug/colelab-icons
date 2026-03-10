// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UnlockFilledSvg from '@colelab/icons-svg/es/asn/UnlockFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UnlockFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UnlockFilledSvg }, slots);
  },
});
