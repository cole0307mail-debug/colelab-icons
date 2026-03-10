// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RingLayoutOutlinedSvg from '@colelab/icons-svg/es/asn/RingLayoutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RingLayoutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RingLayoutOutlinedSvg }, slots);
  },
});
