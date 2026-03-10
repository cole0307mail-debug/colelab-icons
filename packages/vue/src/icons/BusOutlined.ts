// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BusOutlinedSvg from '@colelab/icons-svg/es/asn/BusOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BusOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BusOutlinedSvg }, slots);
  },
});
