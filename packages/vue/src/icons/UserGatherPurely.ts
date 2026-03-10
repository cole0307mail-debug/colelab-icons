// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserGatherPurelySvg from '@colelab/icons-svg/es/asn/UserGatherPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserGatherPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserGatherPurelySvg }, slots);
  },
});
