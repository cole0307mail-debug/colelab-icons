// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FrostOutlinedSvg from '@colelab/icons-svg/es/asn/FrostOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FrostOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FrostOutlinedSvg }, slots);
  },
});
