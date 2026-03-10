// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CellularDiagramFilledSvg from '@colelab/icons-svg/es/asn/CellularDiagramFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CellularDiagramFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CellularDiagramFilledSvg }, slots);
  },
});
