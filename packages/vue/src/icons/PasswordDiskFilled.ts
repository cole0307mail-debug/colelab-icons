// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PasswordDiskFilledSvg from '@colelab/icons-svg/es/asn/PasswordDiskFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PasswordDiskFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PasswordDiskFilledSvg }, slots);
  },
});
