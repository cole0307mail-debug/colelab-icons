// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HelmetFilledSvg from '@colelab/icons-svg/es/asn/HelmetFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HelmetFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HelmetFilledSvg }, slots);
  },
});
