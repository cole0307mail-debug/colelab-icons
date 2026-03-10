// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowTextStartOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowTextStartOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowTextStartOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowTextStartOutlinedSvg }, slots);
  },
});
