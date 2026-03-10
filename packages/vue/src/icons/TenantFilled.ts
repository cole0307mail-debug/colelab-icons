// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TenantFilledSvg from '@colelab/icons-svg/es/asn/TenantFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TenantFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TenantFilledSvg }, slots);
  },
});
