// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DataInsightsFilledSvg from '@colelab/icons-svg/es/asn/DataInsightsFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DataInsightsFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DataInsightsFilledSvg }, slots);
  },
});
