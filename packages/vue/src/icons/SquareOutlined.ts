// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SquareOutlinedSvg from '@colelab/icons-svg/es/asn/SquareOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SquareOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SquareOutlinedSvg }, slots);
  },
});
