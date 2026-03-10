// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileExclamationOutlinedSvg from '@colelab/icons-svg/es/asn/FileExclamationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileExclamationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileExclamationOutlinedSvg }, slots);
  },
});
