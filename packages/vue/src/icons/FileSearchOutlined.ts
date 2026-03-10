// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileSearchOutlinedSvg from '@colelab/icons-svg/es/asn/FileSearchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileSearchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileSearchOutlinedSvg }, slots);
  },
});
