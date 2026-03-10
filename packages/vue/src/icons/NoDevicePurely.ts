// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NoDevicePurelySvg from '@colelab/icons-svg/es/asn/NoDevicePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NoDevicePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NoDevicePurelySvg }, slots);
  },
});
