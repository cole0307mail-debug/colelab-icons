// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StarFilledSvg from '@colelab/icons-svg/es/asn/StarFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StarFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StarFilledSvg }, slots);
  },
});
