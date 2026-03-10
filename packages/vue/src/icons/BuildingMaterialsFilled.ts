// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BuildingMaterialsFilledSvg from '@colelab/icons-svg/es/asn/BuildingMaterialsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BuildingMaterialsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BuildingMaterialsFilledSvg }, slots);
  },
});
