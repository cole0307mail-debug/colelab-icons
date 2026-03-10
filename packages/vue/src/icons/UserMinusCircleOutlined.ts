// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserMinusCircleOutlinedSvg from '@colelab/icons-svg/es/asn/UserMinusCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserMinusCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserMinusCircleOutlinedSvg }, slots);
  },
});
