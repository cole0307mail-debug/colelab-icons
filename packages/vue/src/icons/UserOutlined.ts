// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserOutlinedSvg from '@colelab/icons-svg/es/asn/UserOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserOutlinedSvg }, slots);
  },
});
