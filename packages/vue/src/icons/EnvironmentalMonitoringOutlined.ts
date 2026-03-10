// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EnvironmentalMonitoringOutlinedSvg from '@colelab/icons-svg/es/asn/EnvironmentalMonitoringOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EnvironmentalMonitoringOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EnvironmentalMonitoringOutlinedSvg }, slots);
  },
});
