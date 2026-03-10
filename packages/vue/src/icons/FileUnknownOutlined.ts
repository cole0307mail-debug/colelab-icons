// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileUnknownOutlinedSvg from '@colelab/icons-svg/es/asn/FileUnknownOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileUnknownOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileUnknownOutlinedSvg }, slots);
  },
});
