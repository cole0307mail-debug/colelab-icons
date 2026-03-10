// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RemoteFireMonitoringOutlinedSvg from '@colelab/icons-svg/es/asn/RemoteFireMonitoringOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RemoteFireMonitoringOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RemoteFireMonitoringOutlinedSvg }, slots);
  },
});
