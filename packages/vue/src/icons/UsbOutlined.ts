// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UsbOutlinedSvg from '@colelab/icons-svg/es/asn/UsbOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UsbOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UsbOutlinedSvg }, slots);
  },
});
