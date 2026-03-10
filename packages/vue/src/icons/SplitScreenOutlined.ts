// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SplitScreenOutlinedSvg from '@colelab/icons-svg/es/asn/SplitScreenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SplitScreenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SplitScreenOutlinedSvg }, slots);
  },
});
