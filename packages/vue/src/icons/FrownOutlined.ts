// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FrownOutlinedSvg from '@colelab/icons-svg/es/asn/FrownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FrownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FrownOutlinedSvg }, slots);
  },
});
