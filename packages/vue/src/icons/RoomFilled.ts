// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RoomFilledSvg from '@colelab/icons-svg/es/asn/RoomFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RoomFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RoomFilledSvg }, slots);
  },
});
