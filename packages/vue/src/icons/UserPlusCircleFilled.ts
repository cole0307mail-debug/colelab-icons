// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserPlusCircleFilledSvg from '@colelab/icons-svg/es/asn/UserPlusCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserPlusCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserPlusCircleFilledSvg }, slots);
  },
});
