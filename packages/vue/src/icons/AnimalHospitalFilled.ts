// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AnimalHospitalFilledSvg from '@colelab/icons-svg/es/asn/AnimalHospitalFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AnimalHospitalFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AnimalHospitalFilledSvg }, slots);
  },
});
