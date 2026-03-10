// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ReportPurelySvg from '@colelab/icons-svg/es/asn/ReportPurely';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ReportPurely',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ReportPurelySvg }, slots);
  },
});
