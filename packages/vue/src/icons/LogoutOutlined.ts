// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LogoutOutlinedSvg from '@colelab/icons-svg/es/asn/LogoutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LogoutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LogoutOutlinedSvg }, slots);
  },
});
