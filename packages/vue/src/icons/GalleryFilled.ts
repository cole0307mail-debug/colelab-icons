// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GalleryFilledSvg from '@colelab/icons-svg/es/asn/GalleryFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GalleryFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GalleryFilledSvg }, slots);
  },
});
