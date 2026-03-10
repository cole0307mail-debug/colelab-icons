// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SecurityGuardOutlinedSvg from '@colelab/icons-svg/es/asn/SecurityGuardOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SecurityGuardOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SecurityGuardOutlinedSvg }, slots);
  },
});
