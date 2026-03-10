// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserTimeFilledSvg from '@colelab/icons-svg/es/asn/UserTimeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserTimeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserTimeFilledSvg }, slots);
  },
});
