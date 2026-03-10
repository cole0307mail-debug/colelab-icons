// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AccountBookFilledSvg from '@colelab/icons-svg/es/asn/AccountBookFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AccountBookFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AccountBookFilledSvg }, slots);
  },
});
