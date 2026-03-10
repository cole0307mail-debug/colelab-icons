// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserExclamationCircleFilledSvg from '@colelab/icons-svg/es/asn/UserExclamationCircleFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserExclamationCircleFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserExclamationCircleFilledSvg }, slots);
  },
});
