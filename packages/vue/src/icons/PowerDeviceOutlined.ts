// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PowerDeviceOutlinedSvg from '@colelab/icons-svg/es/asn/PowerDeviceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PowerDeviceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PowerDeviceOutlinedSvg }, slots);
  },
});
