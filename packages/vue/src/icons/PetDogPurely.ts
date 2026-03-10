// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PetDogPurelySvg from '@colelab/icons-svg/es/asn/PetDogPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PetDogPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PetDogPurelySvg }, slots);
  },
});
