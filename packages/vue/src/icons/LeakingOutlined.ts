// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LeakingOutlinedSvg from '@colelab/icons-svg/es/asn/LeakingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LeakingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LeakingOutlinedSvg }, slots);
  },
});
