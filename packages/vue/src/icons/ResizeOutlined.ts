// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ResizeOutlinedSvg from '@colelab/icons-svg/es/asn/ResizeOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ResizeOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ResizeOutlinedSvg }, slots);
  },
});
