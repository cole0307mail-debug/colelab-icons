// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileJpegOutlinedSvg from '@colelab/icons-svg/es/asn/FileJpegOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileJpegOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileJpegOutlinedSvg }, slots);
  },
});
