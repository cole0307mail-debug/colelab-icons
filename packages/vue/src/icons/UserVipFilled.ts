// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserVipFilledSvg from '@colelab/icons-svg/es/asn/UserVipFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserVipFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserVipFilledSvg }, slots);
  },
});
