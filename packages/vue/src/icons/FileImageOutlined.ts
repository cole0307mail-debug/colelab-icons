// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileImageOutlinedSvg from '@colelab/icons-svg/es/asn/FileImageOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileImageOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileImageOutlinedSvg }, slots);
  },
});
