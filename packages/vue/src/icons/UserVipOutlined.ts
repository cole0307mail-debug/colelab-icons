// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserVipOutlinedSvg from '@colelab/icons-svg/es/asn/UserVipOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserVipOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserVipOutlinedSvg }, slots);
  },
});
