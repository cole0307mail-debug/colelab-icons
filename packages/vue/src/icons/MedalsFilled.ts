// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import MedalsFilledSvg from '@colelab/icons-svg/es/asn/MedalsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'MedalsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: MedalsFilledSvg }, slots);
  },
});
