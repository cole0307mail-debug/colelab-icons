// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HangUpFilledSvg from '@colelab/icons-svg/es/asn/HangUpFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HangUpFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HangUpFilledSvg }, slots);
  },
});
