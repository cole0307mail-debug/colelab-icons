// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TrophyOutlinedSvg from '@colelab/icons-svg/es/asn/TrophyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TrophyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TrophyOutlinedSvg }, slots);
  },
});
