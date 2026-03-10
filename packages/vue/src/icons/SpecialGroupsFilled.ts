// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SpecialGroupsFilledSvg from '@colelab/icons-svg/es/asn/SpecialGroupsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SpecialGroupsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SpecialGroupsFilledSvg }, slots);
  },
});
