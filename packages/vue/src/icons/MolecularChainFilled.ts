// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MolecularChainFilledSvg from '@colelab/icons-svg/es/asn/MolecularChainFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MolecularChainFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MolecularChainFilledSvg }, slots);
  },
});
