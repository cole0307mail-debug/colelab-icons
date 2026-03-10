// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrganizeOutlinedSvg from '@colelab/icons-svg/es/asn/OrganizeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrganizeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrganizeOutlinedSvg }, slots);
  },
});
