// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HorizontalBottomOutlinedSvg from '@colelab/icons-svg/es/asn/HorizontalBottomOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HorizontalBottomOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HorizontalBottomOutlinedSvg }, slots);
  },
});
