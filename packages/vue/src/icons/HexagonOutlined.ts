// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HexagonOutlinedSvg from '@colelab/icons-svg/es/asn/HexagonOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HexagonOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HexagonOutlinedSvg }, slots);
  },
});
