// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScreenshotOutlinedSvg from '@colelab/icons-svg/es/asn/ScreenshotOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScreenshotOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScreenshotOutlinedSvg }, slots);
  },
});
