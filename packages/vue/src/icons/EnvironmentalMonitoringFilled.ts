// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EnvironmentalMonitoringFilledSvg from '@colelab/icons-svg/es/asn/EnvironmentalMonitoringFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EnvironmentalMonitoringFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EnvironmentalMonitoringFilledSvg }, slots);
  },
});
