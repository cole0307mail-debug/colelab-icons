// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PetDogOutlinedSvg from '@colelab/icons-svg/es/asn/PetDogOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PetDogOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PetDogOutlinedSvg }, slots);
  },
});
