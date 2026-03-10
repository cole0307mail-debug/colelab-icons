// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AcademicCapOutlinedSvg from '@colelab/icons-svg/es/asn/AcademicCapOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AcademicCapOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AcademicCapOutlinedSvg }, slots);
  },
});
