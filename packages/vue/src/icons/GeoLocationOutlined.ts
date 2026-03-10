// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GeoLocationOutlinedSvg from '@colelab/icons-svg/es/asn/GeoLocationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GeoLocationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GeoLocationOutlinedSvg }, slots);
  },
});
