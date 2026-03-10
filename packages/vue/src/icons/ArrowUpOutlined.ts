// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowUpOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowUpOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowUpOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowUpOutlinedSvg }, slots);
  },
});
