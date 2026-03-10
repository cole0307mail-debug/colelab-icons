// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PoiPurelySvg from '@colelab/icons-svg/es/asn/PoiPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PoiPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PoiPurelySvg }, slots);
  },
});
