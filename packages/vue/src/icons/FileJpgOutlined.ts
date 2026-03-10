// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileJpgOutlinedSvg from '@colelab/icons-svg/es/asn/FileJpgOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileJpgOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileJpgOutlinedSvg }, slots);
  },
});
