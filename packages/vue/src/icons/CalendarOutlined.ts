// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CalendarOutlinedSvg from '@colelab/icons-svg/es/asn/CalendarOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CalendarOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CalendarOutlinedSvg }, slots);
  },
});
