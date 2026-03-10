// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TwinsOutlinedSvg from '@colelab/icons-svg/es/asn/TwinsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TwinsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TwinsOutlinedSvg }, slots);
  },
});
