// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShoppingCartOutlinedSvg from '@colelab/icons-svg/es/asn/ShoppingCartOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShoppingCartOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShoppingCartOutlinedSvg }, slots);
  },
});
