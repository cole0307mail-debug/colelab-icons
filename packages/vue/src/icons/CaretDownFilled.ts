// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CaretDownFilledSvg from '@colelab/icons-svg/es/asn/CaretDownFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CaretDownFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CaretDownFilledSvg }, slots);
  },
});
