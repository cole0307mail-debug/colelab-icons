// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MemorialOutlinedSvg from '@colelab/icons-svg/es/asn/MemorialOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MemorialOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MemorialOutlinedSvg }, slots);
  },
});
