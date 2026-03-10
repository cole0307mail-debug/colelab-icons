// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RefillStationFilledSvg from '@colelab/icons-svg/es/asn/RefillStationFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RefillStationFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RefillStationFilledSvg }, slots);
  },
});
