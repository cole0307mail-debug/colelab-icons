// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserRemoteOutlinedSvg from '@colelab/icons-svg/es/asn/UserRemoteOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserRemoteOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserRemoteOutlinedSvg }, slots);
  },
});
