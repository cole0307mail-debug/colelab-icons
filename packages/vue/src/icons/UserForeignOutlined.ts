// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserForeignOutlinedSvg from '@colelab/icons-svg/es/asn/UserForeignOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserForeignOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserForeignOutlinedSvg }, slots);
  },
});
