// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BridgeFilledSvg from '@colelab/icons-svg/es/asn/BridgeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BridgeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BridgeFilledSvg }, slots);
  },
});
