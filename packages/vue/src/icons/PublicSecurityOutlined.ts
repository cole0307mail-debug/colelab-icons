// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PublicSecurityOutlinedSvg from '@colelab/icons-svg/es/asn/PublicSecurityOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PublicSecurityOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PublicSecurityOutlinedSvg }, slots);
  },
});
