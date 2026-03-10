// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VesselFilledSvg from '@colelab/icons-svg/es/asn/VesselFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VesselFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VesselFilledSvg }, slots);
  },
});
