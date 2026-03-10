// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AlarmClockOutlinedSvg from '@colelab/icons-svg/es/asn/AlarmClockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AlarmClockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AlarmClockOutlinedSvg }, slots);
  },
});
