// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LocationPurelySvg from '@colelab/icons-svg/es/asn/LocationPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LocationPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LocationPurelySvg }, slots);
  },
});
