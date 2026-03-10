// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ScheduleOutlinedSvg from '@colelab/icons-svg/es/asn/ScheduleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ScheduleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ScheduleOutlinedSvg }, slots);
  },
});
