// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MufflingDeviceFilledSvg from '@colelab/icons-svg/es/asn/MufflingDeviceFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MufflingDeviceFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MufflingDeviceFilledSvg }, slots);
  },
});
