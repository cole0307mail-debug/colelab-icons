// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlarmClockFilledSvg from '@colelab/icons-svg/es/asn/AlarmClockFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlarmClockFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlarmClockFilledSvg }, slots);
  },
});
