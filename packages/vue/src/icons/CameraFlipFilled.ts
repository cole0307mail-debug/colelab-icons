// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CameraFlipFilledSvg from '@colelab/icons-svg/es/asn/CameraFlipFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CameraFlipFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CameraFlipFilledSvg }, slots);
  },
});
