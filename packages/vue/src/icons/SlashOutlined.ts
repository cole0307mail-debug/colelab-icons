// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SlashOutlinedSvg from '@colelab/icons-svg/es/asn/SlashOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SlashOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SlashOutlinedSvg }, slots);
  },
});
