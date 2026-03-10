// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowCircleEndOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowCircleEndOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowCircleEndOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowCircleEndOutlinedSvg }, slots);
  },
});
