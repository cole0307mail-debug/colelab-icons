// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserFilledSvg from '@colelab/icons-svg/es/asn/UserFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserFilledSvg }, slots);
  },
});
