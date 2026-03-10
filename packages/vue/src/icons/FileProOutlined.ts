// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileProOutlinedSvg from '@colelab/icons-svg/es/asn/FileProOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileProOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileProOutlinedSvg }, slots);
  },
});
