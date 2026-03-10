// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MolecularChainOutlinedSvg from '@colelab/icons-svg/es/asn/MolecularChainOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MolecularChainOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MolecularChainOutlinedSvg }, slots);
  },
});
