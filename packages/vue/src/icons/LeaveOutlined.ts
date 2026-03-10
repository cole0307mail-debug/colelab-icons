// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeaveOutlinedSvg from '@colelab/icons-svg/es/asn/LeaveOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeaveOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeaveOutlinedSvg }, slots);
  },
});
