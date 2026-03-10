// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LoginOutlinedSvg from '@colelab/icons-svg/es/asn/LoginOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LoginOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LoginOutlinedSvg }, slots);
  },
});
