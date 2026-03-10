// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ArrowSquareEndOutlinedSvg from '@colelab/icons-svg/es/asn/ArrowSquareEndOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ArrowSquareEndOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ArrowSquareEndOutlinedSvg }, slots);
  },
});
