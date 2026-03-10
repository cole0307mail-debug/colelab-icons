// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowRightOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowRightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowRightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowRightOutlinedSvg }, slots);
  },
});
