// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AtlasPurelySvg from '@colelab/icons-svg/es/asn/AtlasPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AtlasPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AtlasPurelySvg }, slots);
  },
});
