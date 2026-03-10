// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PeersFilledSvg from '@colelab/icons-svg/es/asn/PeersFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PeersFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PeersFilledSvg }, slots);
  },
});
