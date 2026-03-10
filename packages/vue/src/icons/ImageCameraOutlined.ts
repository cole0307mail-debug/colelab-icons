// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ImageCameraOutlinedSvg from '@colelab/icons-svg/es/asn/ImageCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ImageCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ImageCameraOutlinedSvg }, slots);
  },
});
