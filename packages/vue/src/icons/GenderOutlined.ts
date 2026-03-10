// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GenderOutlinedSvg from '@colelab/icons-svg/es/asn/GenderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GenderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GenderOutlinedSvg }, slots);
  },
});
