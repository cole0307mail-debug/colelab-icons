// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudibleAlarmOpenOutlinedSvg from '@colelab/icons-svg/es/asn/AudibleAlarmOpenOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudibleAlarmOpenOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudibleAlarmOpenOutlinedSvg }, slots);
  },
});
