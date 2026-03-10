// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoFailFilledSvg from '@colelab/icons-svg/es/asn/VideoFailFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoFailFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoFailFilledSvg }, slots);
  },
});
