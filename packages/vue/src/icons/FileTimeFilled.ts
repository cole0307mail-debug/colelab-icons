// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileTimeFilledSvg from '@colelab/icons-svg/es/asn/FileTimeFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileTimeFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileTimeFilledSvg }, slots);
  },
});
