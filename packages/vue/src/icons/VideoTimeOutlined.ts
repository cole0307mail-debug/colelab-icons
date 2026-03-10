// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoTimeOutlinedSvg from '@colelab/icons-svg/es/asn/VideoTimeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoTimeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoTimeOutlinedSvg }, slots);
  },
});
