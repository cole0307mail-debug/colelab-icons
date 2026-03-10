// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceCenterPurelySvg from '@colelab/icons-svg/es/asn/DeviceCenterPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceCenterPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceCenterPurelySvg }, slots);
  },
});
