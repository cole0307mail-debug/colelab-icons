// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceFilledSvg from '@colelab/icons-svg/es/asn/DeviceFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceFilledSvg }, slots);
  },
});
