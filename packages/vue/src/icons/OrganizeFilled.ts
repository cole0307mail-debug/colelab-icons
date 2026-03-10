// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrganizeFilledSvg from '@colelab/icons-svg/es/asn/OrganizeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrganizeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrganizeFilledSvg }, slots);
  },
});
