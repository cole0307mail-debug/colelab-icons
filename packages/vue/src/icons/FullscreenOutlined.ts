// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FullscreenOutlinedSvg from '@colelab/icons-svg/es/asn/FullscreenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FullscreenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FullscreenOutlinedSvg }, slots);
  },
});
