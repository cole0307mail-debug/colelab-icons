// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CalendarCheckFilledSvg from '@colelab/icons-svg/es/asn/CalendarCheckFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CalendarCheckFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CalendarCheckFilledSvg }, slots);
  },
});
