// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserRoleFilledSvg from '@colelab/icons-svg/es/asn/UserRoleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserRoleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserRoleFilledSvg }, slots);
  },
});
