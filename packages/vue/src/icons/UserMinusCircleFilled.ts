// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserMinusCircleFilledSvg from '@colelab/icons-svg/es/asn/UserMinusCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserMinusCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserMinusCircleFilledSvg }, slots);
  },
});
