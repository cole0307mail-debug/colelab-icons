// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AuthOutlinedSvg from '@colelab/icons-svg/es/asn/AuthOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AuthOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AuthOutlinedSvg }, slots);
  },
});
