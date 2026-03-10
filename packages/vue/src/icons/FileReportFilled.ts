// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileReportFilledSvg from '@colelab/icons-svg/es/asn/FileReportFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileReportFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileReportFilledSvg }, slots);
  },
});
