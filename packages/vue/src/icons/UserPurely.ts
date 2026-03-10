// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserPurelySvg from '@colelab/icons-svg/es/asn/UserPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserPurelySvg }, slots);
  },
});
