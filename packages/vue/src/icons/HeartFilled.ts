// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeartFilledSvg from '@colelab/icons-svg/es/asn/HeartFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeartFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeartFilledSvg }, slots);
  },
});
