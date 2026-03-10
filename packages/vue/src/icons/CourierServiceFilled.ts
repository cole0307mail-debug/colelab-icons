// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CourierServiceFilledSvg from '@colelab/icons-svg/es/asn/CourierServiceFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CourierServiceFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CourierServiceFilledSvg }, slots);
  },
});
