// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AcademicCapFilledSvg from '@colelab/icons-svg/es/asn/AcademicCapFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AcademicCapFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AcademicCapFilledSvg }, slots);
  },
});
