// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TenantOutlinedSvg from '@colelab/icons-svg/es/asn/TenantOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TenantOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TenantOutlinedSvg }, slots);
  },
});
