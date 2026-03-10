// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TwoSplitScreenOutlinedSvg from '@colelab/icons-svg/es/asn/TwoSplitScreenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TwoSplitScreenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TwoSplitScreenOutlinedSvg }, slots);
  },
});
