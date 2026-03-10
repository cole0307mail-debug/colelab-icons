// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SwapLeftOutlinedSvg from '@colelab/icons-svg/es/asn/SwapLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SwapLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SwapLeftOutlinedSvg }, slots);
  },
});
