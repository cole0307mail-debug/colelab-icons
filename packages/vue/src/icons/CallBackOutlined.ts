// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CallBackOutlinedSvg from '@colelab/icons-svg/es/asn/CallBackOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CallBackOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CallBackOutlinedSvg }, slots);
  },
});
