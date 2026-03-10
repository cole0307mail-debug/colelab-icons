// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SleepFilledSvg from '@colelab/icons-svg/es/asn/SleepFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SleepFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SleepFilledSvg }, slots);
  },
});
