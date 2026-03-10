// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserExclamationCircleOutlinedSvg from '@colelab/icons-svg/es/asn/UserExclamationCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserExclamationCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserExclamationCircleOutlinedSvg }, slots);
  },
});
