// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileProFilledSvg from '@colelab/icons-svg/es/asn/FileProFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileProFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileProFilledSvg }, slots);
  },
});
