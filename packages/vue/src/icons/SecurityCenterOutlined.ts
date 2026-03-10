// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SecurityCenterOutlinedSvg from '@colelab/icons-svg/es/asn/SecurityCenterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SecurityCenterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SecurityCenterOutlinedSvg }, slots);
  },
});
