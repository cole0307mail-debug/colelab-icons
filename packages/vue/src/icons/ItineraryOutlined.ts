// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ItineraryOutlinedSvg from '@colelab/icons-svg/es/asn/ItineraryOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ItineraryOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ItineraryOutlinedSvg }, slots);
  },
});
