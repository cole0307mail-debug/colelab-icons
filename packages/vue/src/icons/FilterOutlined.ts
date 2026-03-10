// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilterOutlinedSvg from '@colelab/icons-svg/es/asn/FilterOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilterOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilterOutlinedSvg }, slots);
  },
});
