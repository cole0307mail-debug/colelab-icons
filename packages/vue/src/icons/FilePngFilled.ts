// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilePngFilledSvg from '@colelab/icons-svg/es/asn/FilePngFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilePngFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilePngFilledSvg }, slots);
  },
});
