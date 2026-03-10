// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CameraFilledSvg from '@colelab/icons-svg/es/asn/CameraFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CameraFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CameraFilledSvg }, slots);
  },
});
