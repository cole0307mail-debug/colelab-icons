// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileSearchFilledSvg from '@colelab/icons-svg/es/asn/FileSearchFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileSearchFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileSearchFilledSvg }, slots);
  },
});
