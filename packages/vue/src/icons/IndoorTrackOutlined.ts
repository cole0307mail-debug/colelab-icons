// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IndoorTrackOutlinedSvg from '@colelab/icons-svg/es/asn/IndoorTrackOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IndoorTrackOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IndoorTrackOutlinedSvg }, slots);
  },
});
