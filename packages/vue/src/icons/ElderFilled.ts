// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ElderFilledSvg from '@colelab/icons-svg/es/asn/ElderFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ElderFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ElderFilledSvg }, slots);
  },
});
