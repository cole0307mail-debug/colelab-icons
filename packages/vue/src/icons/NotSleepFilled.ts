// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NotSleepFilledSvg from '@colelab/icons-svg/es/asn/NotSleepFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NotSleepFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NotSleepFilledSvg }, slots);
  },
});
