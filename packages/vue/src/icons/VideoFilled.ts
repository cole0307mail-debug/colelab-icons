// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoFilledSvg from '@colelab/icons-svg/es/asn/VideoFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoFilledSvg }, slots);
  },
});
