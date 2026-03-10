// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AppleOutlinedSvg from '@colelab/icons-svg/es/asn/AppleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AppleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AppleOutlinedSvg }, slots);
  },
});
