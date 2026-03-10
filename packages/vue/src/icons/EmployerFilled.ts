// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EmployerFilledSvg from '@colelab/icons-svg/es/asn/EmployerFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EmployerFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EmployerFilledSvg }, slots);
  },
});
