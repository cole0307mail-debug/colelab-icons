// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PoliceBeltOutlinedSvg from '@colelab/icons-svg/es/asn/PoliceBeltOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PoliceBeltOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PoliceBeltOutlinedSvg }, slots);
  },
});
