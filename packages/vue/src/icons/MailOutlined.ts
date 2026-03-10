// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MailOutlinedSvg from '@colelab/icons-svg/es/asn/MailOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MailOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MailOutlinedSvg }, slots);
  },
});
