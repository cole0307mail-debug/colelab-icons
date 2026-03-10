// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RoomOutlinedSvg from '@colelab/icons-svg/es/asn/RoomOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RoomOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RoomOutlinedSvg }, slots);
  },
});
