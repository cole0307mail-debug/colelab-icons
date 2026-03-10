// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserLeaveEarlyFilledSvg from '@colelab/icons-svg/es/asn/UserLeaveEarlyFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserLeaveEarlyFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserLeaveEarlyFilledSvg }, slots);
  },
});
