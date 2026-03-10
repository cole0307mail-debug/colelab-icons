// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoonOutlinedSvg from '@colelab/icons-svg/es/asn/MoonOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoonOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoonOutlinedSvg }, slots);
  },
});
