// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OrderListFilledSvg from '@colelab/icons-svg/es/asn/OrderListFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OrderListFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OrderListFilledSvg }, slots);
  },
});
