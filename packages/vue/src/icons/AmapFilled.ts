// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AmapFilledSvg from '@colelab/icons-svg/es/asn/AmapFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AmapFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AmapFilledSvg }, slots);
  },
});
