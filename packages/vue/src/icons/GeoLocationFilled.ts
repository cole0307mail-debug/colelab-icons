// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GeoLocationFilledSvg from '@colelab/icons-svg/es/asn/GeoLocationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GeoLocationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GeoLocationFilledSvg }, slots);
  },
});
