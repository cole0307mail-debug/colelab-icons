// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoorLockFilledSvg from '@colelab/icons-svg/es/asn/DoorLockFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoorLockFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoorLockFilledSvg }, slots);
  },
});
