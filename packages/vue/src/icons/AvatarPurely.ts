// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AvatarPurelySvg from '@colelab/icons-svg/es/asn/AvatarPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AvatarPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AvatarPurelySvg }, slots);
  },
});
