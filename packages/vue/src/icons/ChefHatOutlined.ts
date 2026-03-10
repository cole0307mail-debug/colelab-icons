// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ChefHatOutlinedSvg from '@colelab/icons-svg/es/asn/ChefHatOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ChefHatOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ChefHatOutlinedSvg }, slots);
  },
});
