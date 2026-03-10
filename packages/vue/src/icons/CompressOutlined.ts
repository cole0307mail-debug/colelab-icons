// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import CompressOutlinedSvg from '@colelab/icons-svg/es/asn/CompressOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'CompressOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: CompressOutlinedSvg }, slots);
  },
});
