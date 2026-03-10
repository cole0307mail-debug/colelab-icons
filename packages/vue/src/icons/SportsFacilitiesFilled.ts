// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SportsFacilitiesFilledSvg from '@colelab/icons-svg/es/asn/SportsFacilitiesFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SportsFacilitiesFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SportsFacilitiesFilledSvg }, slots);
  },
});
