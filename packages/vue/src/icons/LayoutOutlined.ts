// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LayoutOutlinedSvg from '@colelab/icons-svg/es/asn/LayoutOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LayoutOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LayoutOutlinedSvg }, slots);
  },
});
