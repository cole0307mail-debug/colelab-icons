// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ForestFirePurelySvg from '@colelab/icons-svg/es/asn/ForestFirePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ForestFirePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ForestFirePurelySvg }, slots);
  },
});
