// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import AddressOutlinedSvg from '@colelab/icons-svg/es/asn/AddressOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'AddressOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: AddressOutlinedSvg }, slots);
  },
});
