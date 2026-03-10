// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasMonitoringOutlinedSvg from '@colelab/icons-svg/es/asn/GasMonitoringOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasMonitoringOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasMonitoringOutlinedSvg }, slots);
  },
});
