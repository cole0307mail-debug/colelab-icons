// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserTimePurelySvg from '@colelab/icons-svg/es/asn/UserTimePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserTimePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserTimePurelySvg }, slots);
  },
});
