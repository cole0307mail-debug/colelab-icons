// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImageFilledSvg from '@colelab/icons-svg/es/asn/ImageFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImageFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImageFilledSvg }, slots);
  },
});
