// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CallVideoOutlinedSvg from '@colelab/icons-svg/es/asn/CallVideoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CallVideoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CallVideoOutlinedSvg }, slots);
  },
});
