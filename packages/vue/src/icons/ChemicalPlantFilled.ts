// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ChemicalPlantFilledSvg from '@colelab/icons-svg/es/asn/ChemicalPlantFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ChemicalPlantFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ChemicalPlantFilledSvg }, slots);
  },
});
