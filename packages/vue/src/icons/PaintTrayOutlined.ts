// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PaintTrayOutlinedSvg from '@colelab/icons-svg/es/asn/PaintTrayOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PaintTrayOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PaintTrayOutlinedSvg }, slots);
  },
});
