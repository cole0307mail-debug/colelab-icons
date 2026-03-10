// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FrownFilledSvg from '@colelab/icons-svg/es/asn/FrownFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FrownFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FrownFilledSvg }, slots);
  },
});
