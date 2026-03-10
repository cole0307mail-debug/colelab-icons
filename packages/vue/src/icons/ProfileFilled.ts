// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ProfileFilledSvg from '@colelab/icons-svg/es/asn/ProfileFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ProfileFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ProfileFilledSvg }, slots);
  },
});
