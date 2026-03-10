// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MessageOutlinedSvg from '@colelab/icons-svg/es/asn/MessageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MessageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MessageOutlinedSvg }, slots);
  },
});
