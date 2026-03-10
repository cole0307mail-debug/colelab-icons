// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GasMonitoringFilledSvg from '@colelab/icons-svg/es/asn/GasMonitoringFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GasMonitoringFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GasMonitoringFilledSvg }, slots);
  },
});
