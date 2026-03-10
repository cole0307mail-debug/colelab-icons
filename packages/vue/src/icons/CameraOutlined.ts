// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CameraOutlinedSvg from '@colelab/icons-svg/es/asn/CameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CameraOutlinedSvg }, slots);
  },
});
