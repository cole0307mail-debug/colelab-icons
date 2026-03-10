// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ComputerOutlinedSvg from '@colelab/icons-svg/es/asn/ComputerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ComputerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ComputerOutlinedSvg }, slots);
  },
});
