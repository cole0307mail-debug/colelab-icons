// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoctorOutlinedSvg from '@colelab/icons-svg/es/asn/DoctorOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoctorOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoctorOutlinedSvg }, slots);
  },
});
