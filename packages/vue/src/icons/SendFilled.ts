// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SendFilledSvg from '@colelab/icons-svg/es/asn/SendFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SendFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SendFilledSvg }, slots);
  },
});
