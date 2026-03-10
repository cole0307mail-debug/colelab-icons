// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HeavyFogOutlinedSvg from '@colelab/icons-svg/es/asn/HeavyFogOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HeavyFogOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HeavyFogOutlinedSvg }, slots);
  },
});
