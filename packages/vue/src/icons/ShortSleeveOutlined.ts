// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShortSleeveOutlinedSvg from '@colelab/icons-svg/es/asn/ShortSleeveOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShortSleeveOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShortSleeveOutlinedSvg }, slots);
  },
});
