// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RestFilledSvg from '@colelab/icons-svg/es/asn/RestFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RestFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RestFilledSvg }, slots);
  },
});
