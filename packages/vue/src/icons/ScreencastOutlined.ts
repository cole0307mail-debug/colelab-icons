// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScreencastOutlinedSvg from '@colelab/icons-svg/es/asn/ScreencastOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScreencastOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScreencastOutlinedSvg }, slots);
  },
});
