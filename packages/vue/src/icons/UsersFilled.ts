// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UsersFilledSvg from '@colelab/icons-svg/es/asn/UsersFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UsersFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UsersFilledSvg }, slots);
  },
});
