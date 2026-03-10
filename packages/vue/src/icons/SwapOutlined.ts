// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SwapOutlinedSvg from '@colelab/icons-svg/es/asn/SwapOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SwapOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SwapOutlinedSvg }, slots);
  },
});
