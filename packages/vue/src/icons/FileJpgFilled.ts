// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileJpgFilledSvg from '@colelab/icons-svg/es/asn/FileJpgFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileJpgFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileJpgFilledSvg }, slots);
  },
});
