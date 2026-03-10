// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EllipsisCircleOutlinedSvg from '@colelab/icons-svg/es/asn/EllipsisCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EllipsisCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EllipsisCircleOutlinedSvg }, slots);
  },
});
