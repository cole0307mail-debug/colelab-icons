// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UnorderedListOutlinedSvg from '@colelab/icons-svg/es/asn/UnorderedListOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UnorderedListOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UnorderedListOutlinedSvg }, slots);
  },
});
