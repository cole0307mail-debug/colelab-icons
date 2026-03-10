// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowTextEndOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowTextEndOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowTextEndOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowTextEndOutlinedSvg }, slots);
  },
});
