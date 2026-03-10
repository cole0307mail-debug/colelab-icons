// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoneyWatchFilledSvg from '@colelab/icons-svg/es/asn/MoneyWatchFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoneyWatchFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoneyWatchFilledSvg }, slots);
  },
});
