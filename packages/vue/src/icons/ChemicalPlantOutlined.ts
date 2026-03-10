// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ChemicalPlantOutlinedSvg from '@colelab/icons-svg/es/asn/ChemicalPlantOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ChemicalPlantOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ChemicalPlantOutlinedSvg }, slots);
  },
});
