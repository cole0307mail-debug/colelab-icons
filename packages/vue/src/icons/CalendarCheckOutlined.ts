// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CalendarCheckOutlinedSvg from '@colelab/icons-svg/es/asn/CalendarCheckOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CalendarCheckOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CalendarCheckOutlinedSvg }, slots);
  },
});
