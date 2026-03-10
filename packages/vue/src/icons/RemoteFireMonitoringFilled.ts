// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RemoteFireMonitoringFilledSvg from '@colelab/icons-svg/es/asn/RemoteFireMonitoringFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RemoteFireMonitoringFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RemoteFireMonitoringFilledSvg }, slots);
  },
});
