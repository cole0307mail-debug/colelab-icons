// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LinsOutlinedSvg from '@colelab/icons-svg/es/asn/LinsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LinsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LinsOutlinedSvg }, slots);
  },
});
