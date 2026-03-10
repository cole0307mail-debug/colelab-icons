// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TunnelFilledSvg from '@colelab/icons-svg/es/asn/TunnelFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TunnelFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TunnelFilledSvg }, slots);
  },
});
