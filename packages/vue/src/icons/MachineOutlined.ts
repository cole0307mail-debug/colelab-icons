// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MachineOutlinedSvg from '@colelab/icons-svg/es/asn/MachineOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MachineOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MachineOutlinedSvg }, slots);
  },
});
