// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileCheckFilledSvg from '@colelab/icons-svg/es/asn/FileCheckFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileCheckFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileCheckFilledSvg }, slots);
  },
});
