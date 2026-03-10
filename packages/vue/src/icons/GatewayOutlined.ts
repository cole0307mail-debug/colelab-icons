// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GatewayOutlinedSvg from '@colelab/icons-svg/es/asn/GatewayOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GatewayOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GatewayOutlinedSvg }, slots);
  },
});
