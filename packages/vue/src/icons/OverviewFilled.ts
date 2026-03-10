// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import OverviewFilledSvg from '@colelab/icons-svg/es/asn/OverviewFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'OverviewFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: OverviewFilledSvg }, slots);
  },
});
