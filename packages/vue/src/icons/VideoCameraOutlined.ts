// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VideoCameraOutlinedSvg from '@colelab/icons-svg/es/asn/VideoCameraOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VideoCameraOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VideoCameraOutlinedSvg }, slots);
  },
});
