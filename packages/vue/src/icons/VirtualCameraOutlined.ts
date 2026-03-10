// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VirtualCameraOutlinedSvg from '@colelab/icons-svg/es/asn/VirtualCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VirtualCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VirtualCameraOutlinedSvg }, slots);
  },
});
