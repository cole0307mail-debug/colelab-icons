// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MobileOutlinedSvg from '@colelab/icons-svg/es/asn/MobileOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MobileOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MobileOutlinedSvg }, slots);
  },
});
