// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserManageOutlinedSvg from '@colelab/icons-svg/es/asn/UserManageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserManageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserManageOutlinedSvg }, slots);
  },
});
