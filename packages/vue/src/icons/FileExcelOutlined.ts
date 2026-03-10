// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileExcelOutlinedSvg from '@colelab/icons-svg/es/asn/FileExcelOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileExcelOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileExcelOutlinedSvg }, slots);
  },
});
