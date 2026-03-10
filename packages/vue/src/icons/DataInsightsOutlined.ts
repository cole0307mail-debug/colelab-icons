// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DataInsightsOutlinedSvg from '@colelab/icons-svg/es/asn/DataInsightsOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DataInsightsOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DataInsightsOutlinedSvg }, slots);
  },
});
