// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VillageOutlinedSvg from '@colelab/icons-svg/es/asn/VillageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VillageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VillageOutlinedSvg }, slots);
  },
});
