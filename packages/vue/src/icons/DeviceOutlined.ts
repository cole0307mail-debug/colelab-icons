// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DeviceOutlinedSvg from '@colelab/icons-svg/es/asn/DeviceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DeviceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DeviceOutlinedSvg }, slots);
  },
});
