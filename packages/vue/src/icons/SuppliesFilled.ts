// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SuppliesFilledSvg from '@colelab/icons-svg/es/asn/SuppliesFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SuppliesFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SuppliesFilledSvg }, slots);
  },
});
