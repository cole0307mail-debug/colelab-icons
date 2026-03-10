// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LikeOutlinedSvg from '@colelab/icons-svg/es/asn/LikeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LikeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LikeOutlinedSvg }, slots);
  },
});
