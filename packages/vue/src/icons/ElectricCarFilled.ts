// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricCarFilledSvg from '@colelab/icons-svg/es/asn/ElectricCarFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricCarFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricCarFilledSvg }, slots);
  },
});
