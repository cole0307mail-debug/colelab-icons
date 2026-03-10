// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileOutlinedSvg from '@colelab/icons-svg/es/asn/FileOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileOutlinedSvg }, slots);
  },
});
