// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MedicalKitOutlinedSvg from '@colelab/icons-svg/es/asn/MedicalKitOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MedicalKitOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MedicalKitOutlinedSvg }, slots);
  },
});
