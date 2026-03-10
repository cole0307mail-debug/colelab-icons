// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LockOutlinedSvg from '@colelab/icons-svg/es/asn/LockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LockOutlinedSvg }, slots);
  },
});
