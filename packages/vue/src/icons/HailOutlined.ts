// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HailOutlinedSvg from '@colelab/icons-svg/es/asn/HailOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HailOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HailOutlinedSvg }, slots);
  },
});
