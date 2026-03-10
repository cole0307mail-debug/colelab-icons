// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FileSealFilledSvg from '@colelab/icons-svg/es/asn/FileSealFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FileSealFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FileSealFilledSvg }, slots);
  },
});
