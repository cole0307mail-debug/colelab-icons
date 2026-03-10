// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImageSearchOutlinedSvg from '@colelab/icons-svg/es/asn/ImageSearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImageSearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImageSearchOutlinedSvg }, slots);
  },
});
