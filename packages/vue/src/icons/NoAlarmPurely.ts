// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoAlarmPurelySvg from '@colelab/icons-svg/es/asn/NoAlarmPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoAlarmPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoAlarmPurelySvg }, slots);
  },
});
