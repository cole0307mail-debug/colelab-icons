// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CameraFlipOutlinedSvg from '@colelab/icons-svg/es/asn/CameraFlipOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CameraFlipOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CameraFlipOutlinedSvg }, slots);
  },
});
