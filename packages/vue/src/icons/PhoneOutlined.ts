// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PhoneOutlinedSvg from '@colelab/icons-svg/es/asn/PhoneOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PhoneOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PhoneOutlinedSvg }, slots);
  },
});
