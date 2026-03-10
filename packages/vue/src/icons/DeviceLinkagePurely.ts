// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceLinkagePurelySvg from '@colelab/icons-svg/es/asn/DeviceLinkagePurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceLinkagePurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceLinkagePurelySvg }, slots);
  },
});
