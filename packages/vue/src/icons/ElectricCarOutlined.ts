// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElectricCarOutlinedSvg from '@colelab/icons-svg/es/asn/ElectricCarOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElectricCarOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElectricCarOutlinedSvg }, slots);
  },
});
