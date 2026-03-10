// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import StatisticsFilledSvg from '@colelab/icons-svg/es/asn/StatisticsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'StatisticsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: StatisticsFilledSvg }, slots);
  },
});
