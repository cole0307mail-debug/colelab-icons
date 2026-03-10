// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartCommunityFilledSvg from '@colelab/icons-svg/es/asn/SmartCommunityFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartCommunityFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartCommunityFilledSvg }, slots);
  },
});
