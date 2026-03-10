// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilePngOutlinedSvg from '@colelab/icons-svg/es/asn/FilePngOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilePngOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilePngOutlinedSvg }, slots);
  },
});
