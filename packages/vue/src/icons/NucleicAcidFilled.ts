// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NucleicAcidFilledSvg from '@colelab/icons-svg/es/asn/NucleicAcidFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NucleicAcidFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NucleicAcidFilledSvg }, slots);
  },
});
