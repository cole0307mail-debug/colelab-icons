// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoorLockOutlinedSvg from '@colelab/icons-svg/es/asn/DoorLockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoorLockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoorLockOutlinedSvg }, slots);
  },
});
