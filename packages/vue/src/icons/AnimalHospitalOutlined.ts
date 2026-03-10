// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AnimalHospitalOutlinedSvg from '@colelab/icons-svg/es/asn/AnimalHospitalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AnimalHospitalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AnimalHospitalOutlinedSvg }, slots);
  },
});
