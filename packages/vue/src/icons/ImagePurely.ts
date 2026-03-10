// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImagePurelySvg from '@colelab/icons-svg/es/asn/ImagePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImagePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImagePurelySvg }, slots);
  },
});
