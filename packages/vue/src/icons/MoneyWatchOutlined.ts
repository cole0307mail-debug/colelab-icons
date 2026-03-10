// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MoneyWatchOutlinedSvg from '@colelab/icons-svg/es/asn/MoneyWatchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MoneyWatchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MoneyWatchOutlinedSvg }, slots);
  },
});
