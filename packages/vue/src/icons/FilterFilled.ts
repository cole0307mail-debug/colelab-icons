// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilterFilledSvg from '@colelab/icons-svg/es/asn/FilterFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilterFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilterFilledSvg }, slots);
  },
});
