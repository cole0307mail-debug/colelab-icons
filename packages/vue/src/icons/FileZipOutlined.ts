// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileZipOutlinedSvg from '@colelab/icons-svg/es/asn/FileZipOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileZipOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileZipOutlinedSvg }, slots);
  },
});
