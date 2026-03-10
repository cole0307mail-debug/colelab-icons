// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PetDogFilledSvg from '@colelab/icons-svg/es/asn/PetDogFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PetDogFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PetDogFilledSvg }, slots);
  },
});
