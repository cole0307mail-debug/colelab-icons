// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoCameraFilledSvg from '@colelab/icons-svg/es/asn/VideoCameraFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoCameraFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoCameraFilledSvg }, slots);
  },
});
