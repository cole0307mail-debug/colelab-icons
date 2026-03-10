// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AccountOutlinedSvg from '@colelab/icons-svg/es/asn/AccountOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AccountOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AccountOutlinedSvg }, slots);
  },
});
