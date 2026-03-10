// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImageErrorFilledSvg from '@colelab/icons-svg/es/asn/ImageErrorFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImageErrorFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImageErrorFilledSvg }, slots);
  },
});
