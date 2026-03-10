// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MedicalOutlinedSvg from '@colelab/icons-svg/es/asn/MedicalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MedicalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MedicalOutlinedSvg }, slots);
  },
});
