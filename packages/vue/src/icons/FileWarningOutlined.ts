// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileWarningOutlinedSvg from '@colelab/icons-svg/es/asn/FileWarningOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileWarningOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileWarningOutlinedSvg }, slots);
  },
});
