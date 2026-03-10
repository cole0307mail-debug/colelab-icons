// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MessageFilledSvg from '@colelab/icons-svg/es/asn/MessageFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MessageFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MessageFilledSvg }, slots);
  },
});
