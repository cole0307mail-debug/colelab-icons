// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceGroupPurelySvg from '@colelab/icons-svg/es/asn/DeviceGroupPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceGroupPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceGroupPurelySvg }, slots);
  },
});
