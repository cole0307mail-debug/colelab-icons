// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OutfallOutlinedSvg from '@colelab/icons-svg/es/asn/OutfallOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OutfallOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OutfallOutlinedSvg }, slots);
  },
});
