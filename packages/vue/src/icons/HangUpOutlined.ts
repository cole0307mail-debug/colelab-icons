// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HangUpOutlinedSvg from '@colelab/icons-svg/es/asn/HangUpOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HangUpOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HangUpOutlinedSvg }, slots);
  },
});
