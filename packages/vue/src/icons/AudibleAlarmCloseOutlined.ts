// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudibleAlarmCloseOutlinedSvg from '@colelab/icons-svg/es/asn/AudibleAlarmCloseOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudibleAlarmCloseOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudibleAlarmCloseOutlinedSvg }, slots);
  },
});
