// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArcDetectionOutlinedSvg from '@colelab/icons-svg/es/asn/ArcDetectionOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArcDetectionOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArcDetectionOutlinedSvg }, slots);
  },
});
