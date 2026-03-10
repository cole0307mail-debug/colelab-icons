// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AudibleAlarmHostOutlinedSvg from '@colelab/icons-svg/es/asn/AudibleAlarmHostOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AudibleAlarmHostOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AudibleAlarmHostOutlinedSvg }, slots);
  },
});
