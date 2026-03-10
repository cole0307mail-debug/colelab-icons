// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SalesCallFilledSvg from '@colelab/icons-svg/es/asn/SalesCallFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SalesCallFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SalesCallFilledSvg }, slots);
  },
});
