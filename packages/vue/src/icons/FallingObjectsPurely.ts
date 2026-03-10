// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FallingObjectsPurelySvg from '@colelab/icons-svg/es/asn/FallingObjectsPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FallingObjectsPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FallingObjectsPurelySvg }, slots);
  },
});
