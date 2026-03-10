// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SatelliteOutlinedSvg from '@colelab/icons-svg/es/asn/SatelliteOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SatelliteOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SatelliteOutlinedSvg }, slots);
  },
});
