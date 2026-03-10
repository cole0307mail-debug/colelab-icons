// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IllegalBuildingFilledSvg from '@colelab/icons-svg/es/asn/IllegalBuildingFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IllegalBuildingFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IllegalBuildingFilledSvg }, slots);
  },
});
