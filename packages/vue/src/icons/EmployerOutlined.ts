// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EmployerOutlinedSvg from '@colelab/icons-svg/es/asn/EmployerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EmployerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EmployerOutlinedSvg }, slots);
  },
});
