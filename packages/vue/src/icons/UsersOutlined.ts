// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UsersOutlinedSvg from '@colelab/icons-svg/es/asn/UsersOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UsersOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UsersOutlinedSvg }, slots);
  },
});
