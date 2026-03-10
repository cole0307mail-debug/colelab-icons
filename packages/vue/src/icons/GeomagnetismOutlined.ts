// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GeomagnetismOutlinedSvg from '@colelab/icons-svg/es/asn/GeomagnetismOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GeomagnetismOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GeomagnetismOutlinedSvg }, slots);
  },
});
