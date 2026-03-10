// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrganizationPurelySvg from '@colelab/icons-svg/es/asn/OrganizationPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrganizationPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrganizationPurelySvg }, slots);
  },
});
