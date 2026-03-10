// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SortOutlinedSvg from '@colelab/icons-svg/es/asn/SortOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SortOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SortOutlinedSvg }, slots);
  },
});
