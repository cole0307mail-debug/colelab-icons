// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SearchProOutlinedSvg from '@colelab/icons-svg/es/asn/SearchProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SearchProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SearchProOutlinedSvg }, slots);
  },
});
