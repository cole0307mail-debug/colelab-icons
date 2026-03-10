// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LessElectricityFilledSvg from '@colelab/icons-svg/es/asn/LessElectricityFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LessElectricityFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LessElectricityFilledSvg }, slots);
  },
});
