// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LocationFilledSvg from '@colelab/icons-svg/es/asn/LocationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LocationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LocationFilledSvg }, slots);
  },
});
