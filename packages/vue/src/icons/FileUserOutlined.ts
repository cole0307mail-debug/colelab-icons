// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileUserOutlinedSvg from '@colelab/icons-svg/es/asn/FileUserOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileUserOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileUserOutlinedSvg }, slots);
  },
});
