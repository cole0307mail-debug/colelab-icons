// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileInfoOutlinedSvg from '@colelab/icons-svg/es/asn/FileInfoOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileInfoOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileInfoOutlinedSvg }, slots);
  },
});
