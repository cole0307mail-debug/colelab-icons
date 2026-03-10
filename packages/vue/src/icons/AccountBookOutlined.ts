// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AccountBookOutlinedSvg from '@colelab/icons-svg/es/asn/AccountBookOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AccountBookOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AccountBookOutlinedSvg }, slots);
  },
});
