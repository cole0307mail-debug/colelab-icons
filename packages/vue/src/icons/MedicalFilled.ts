// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MedicalFilledSvg from '@colelab/icons-svg/es/asn/MedicalFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MedicalFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MedicalFilledSvg }, slots);
  },
});
