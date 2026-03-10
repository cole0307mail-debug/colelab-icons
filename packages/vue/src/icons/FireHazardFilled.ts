// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FireHazardFilledSvg from '@colelab/icons-svg/es/asn/FireHazardFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FireHazardFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FireHazardFilledSvg }, slots);
  },
});
