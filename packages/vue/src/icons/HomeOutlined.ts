// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HomeOutlinedSvg from '@colelab/icons-svg/es/asn/HomeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HomeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HomeOutlinedSvg }, slots);
  },
});
