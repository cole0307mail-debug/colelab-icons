// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SearchOutlinedSvg from '@colelab/icons-svg/es/asn/SearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SearchOutlinedSvg }, slots);
  },
});
