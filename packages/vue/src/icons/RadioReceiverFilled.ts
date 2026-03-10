// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RadioReceiverFilledSvg from '@colelab/icons-svg/es/asn/RadioReceiverFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RadioReceiverFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RadioReceiverFilledSvg }, slots);
  },
});
