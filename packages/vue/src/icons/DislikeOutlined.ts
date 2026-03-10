// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DislikeOutlinedSvg from '@colelab/icons-svg/es/asn/DislikeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DislikeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DislikeOutlinedSvg }, slots);
  },
});
