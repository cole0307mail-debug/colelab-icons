// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BuildingFilledSvg from '@colelab/icons-svg/es/asn/BuildingFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BuildingFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BuildingFilledSvg }, slots);
  },
});
