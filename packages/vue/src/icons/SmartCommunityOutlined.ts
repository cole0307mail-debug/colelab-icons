// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SmartCommunityOutlinedSvg from '@colelab/icons-svg/es/asn/SmartCommunityOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SmartCommunityOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SmartCommunityOutlinedSvg }, slots);
  },
});
