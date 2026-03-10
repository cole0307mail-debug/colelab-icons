// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileMarkdownOutlinedSvg from '@colelab/icons-svg/es/asn/FileMarkdownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileMarkdownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileMarkdownOutlinedSvg }, slots);
  },
});
