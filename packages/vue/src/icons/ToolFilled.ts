// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ToolFilledSvg from '@colelab/icons-svg/es/asn/ToolFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ToolFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ToolFilledSvg }, slots);
  },
});
