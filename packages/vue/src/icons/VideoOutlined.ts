// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoOutlinedSvg from '@colelab/icons-svg/es/asn/VideoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoOutlinedSvg }, slots);
  },
});
