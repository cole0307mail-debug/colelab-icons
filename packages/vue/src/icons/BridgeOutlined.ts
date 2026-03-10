// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BridgeOutlinedSvg from '@colelab/icons-svg/es/asn/BridgeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BridgeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BridgeOutlinedSvg }, slots);
  },
});
