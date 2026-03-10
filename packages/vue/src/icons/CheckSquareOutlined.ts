// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CheckSquareOutlinedSvg from '@colelab/icons-svg/es/asn/CheckSquareOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CheckSquareOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CheckSquareOutlinedSvg }, slots);
  },
});
