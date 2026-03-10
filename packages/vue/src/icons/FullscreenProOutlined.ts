// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FullscreenProOutlinedSvg from '@colelab/icons-svg/es/asn/FullscreenProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FullscreenProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FullscreenProOutlinedSvg }, slots);
  },
});
