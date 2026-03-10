// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserPenFilledSvg from '@colelab/icons-svg/es/asn/UserPenFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserPenFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserPenFilledSvg }, slots);
  },
});
