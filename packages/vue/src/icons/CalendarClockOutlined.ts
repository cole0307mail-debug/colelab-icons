// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CalendarClockOutlinedSvg from '@colelab/icons-svg/es/asn/CalendarClockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CalendarClockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CalendarClockOutlinedSvg }, slots);
  },
});
