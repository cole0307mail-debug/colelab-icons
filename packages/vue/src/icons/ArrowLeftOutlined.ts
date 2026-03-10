// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowLeftOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowLeftOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowLeftOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowLeftOutlinedSvg }, slots);
  },
});
