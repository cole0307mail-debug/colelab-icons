// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoMonitorPurelySvg from '@colelab/icons-svg/es/asn/VideoMonitorPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoMonitorPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoMonitorPurelySvg }, slots);
  },
});
