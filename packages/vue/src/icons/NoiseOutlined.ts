// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoiseOutlinedSvg from '@colelab/icons-svg/es/asn/NoiseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoiseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoiseOutlinedSvg }, slots);
  },
});
