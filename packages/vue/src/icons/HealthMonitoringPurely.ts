// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HealthMonitoringPurelySvg from '@colelab/icons-svg/es/asn/HealthMonitoringPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HealthMonitoringPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HealthMonitoringPurelySvg }, slots);
  },
});
