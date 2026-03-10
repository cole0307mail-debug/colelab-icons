// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SocialNetworkFilledSvg from '@colelab/icons-svg/es/asn/SocialNetworkFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SocialNetworkFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SocialNetworkFilledSvg }, slots);
  },
});
