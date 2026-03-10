// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserPenOutlinedSvg from '@colelab/icons-svg/es/asn/UserPenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserPenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserPenOutlinedSvg }, slots);
  },
});
