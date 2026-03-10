// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GlobalFilledSvg from '@colelab/icons-svg/es/asn/GlobalFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GlobalFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GlobalFilledSvg }, slots);
  },
});
