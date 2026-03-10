// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceOfflineFilledSvg from '@colelab/icons-svg/es/asn/DeviceOfflineFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceOfflineFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceOfflineFilledSvg }, slots);
  },
});
