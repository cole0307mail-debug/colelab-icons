// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserForeignFilledSvg from '@colelab/icons-svg/es/asn/UserForeignFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserForeignFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserForeignFilledSvg }, slots);
  },
});
