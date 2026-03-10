// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceOfflinePurelySvg from '@colelab/icons-svg/es/asn/DeviceOfflinePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceOfflinePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceOfflinePurelySvg }, slots);
  },
});
