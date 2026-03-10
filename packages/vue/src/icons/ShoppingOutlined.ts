// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShoppingOutlinedSvg from '@colelab/icons-svg/es/asn/ShoppingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShoppingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShoppingOutlinedSvg }, slots);
  },
});
