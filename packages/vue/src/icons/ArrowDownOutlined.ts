// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowDownOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowDownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowDownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowDownOutlinedSvg }, slots);
  },
});
