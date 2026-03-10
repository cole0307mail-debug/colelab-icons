// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileCheckOutlinedSvg from '@colelab/icons-svg/es/asn/FileCheckOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileCheckOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileCheckOutlinedSvg }, slots);
  },
});
