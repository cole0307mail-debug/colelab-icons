// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import NucleicAcidOutlinedSvg from '@colelab/icons-svg/es/asn/NucleicAcidOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'NucleicAcidOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: NucleicAcidOutlinedSvg }, slots);
  },
});
