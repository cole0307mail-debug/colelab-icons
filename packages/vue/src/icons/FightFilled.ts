// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FightFilledSvg from '@colelab/icons-svg/es/asn/FightFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FightFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FightFilledSvg }, slots);
  },
});
