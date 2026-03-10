// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileReportOutlinedSvg from '@colelab/icons-svg/es/asn/FileReportOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileReportOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileReportOutlinedSvg }, slots);
  },
});
