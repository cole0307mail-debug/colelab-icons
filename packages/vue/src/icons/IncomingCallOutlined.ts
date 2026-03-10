// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IncomingCallOutlinedSvg from '@colelab/icons-svg/es/asn/IncomingCallOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IncomingCallOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IncomingCallOutlinedSvg }, slots);
  },
});
