// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UnlockOutlinedSvg from '@colelab/icons-svg/es/asn/UnlockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UnlockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UnlockOutlinedSvg }, slots);
  },
});
