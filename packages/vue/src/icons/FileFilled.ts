// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileFilledSvg from '@colelab/icons-svg/es/asn/FileFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileFilledSvg }, slots);
  },
});
