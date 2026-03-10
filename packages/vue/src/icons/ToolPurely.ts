// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ToolPurelySvg from '@colelab/icons-svg/es/asn/ToolPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ToolPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ToolPurelySvg }, slots);
  },
});
