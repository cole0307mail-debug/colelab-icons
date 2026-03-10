// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BrainMapOutlinedSvg from '@colelab/icons-svg/es/asn/BrainMapOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BrainMapOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BrainMapOutlinedSvg }, slots);
  },
});
