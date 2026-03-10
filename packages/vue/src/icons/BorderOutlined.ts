// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BorderOutlinedSvg from '@colelab/icons-svg/es/asn/BorderOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BorderOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BorderOutlinedSvg }, slots);
  },
});
