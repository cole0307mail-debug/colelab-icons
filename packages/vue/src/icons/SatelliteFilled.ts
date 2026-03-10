// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SatelliteFilledSvg from '@colelab/icons-svg/es/asn/SatelliteFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SatelliteFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SatelliteFilledSvg }, slots);
  },
});
