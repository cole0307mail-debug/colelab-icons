// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HashrateCenterFilledSvg from '@colelab/icons-svg/es/asn/HashrateCenterFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HashrateCenterFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HashrateCenterFilledSvg }, slots);
  },
});
