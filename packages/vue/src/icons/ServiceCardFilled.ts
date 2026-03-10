// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ServiceCardFilledSvg from '@colelab/icons-svg/es/asn/ServiceCardFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ServiceCardFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ServiceCardFilledSvg }, slots);
  },
});
